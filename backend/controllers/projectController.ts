import { GenerateContentConfig, HarmBlockThreshold, HarmCategory } from "@google/genai";
import * as Sentry from "@sentry/node";
import axios from 'axios';
import { v2 as cloudinary } from 'cloudinary';
import { Request, Response } from "express";
import fs from 'fs';
import path from "path";
import ai from "../lib/ai.js";
import { prisma } from "../lib/prisma.js";

const loadImage = (path: string, mimeType: string) => {
    return {
        inlineData: {
            data: fs.readFileSync(path).toString('base64'),
            mimeType
        }
    }
}


//in first part we create img only
export const createProject = async (req: Request, res: Response) => {

    let teamProjectId: string;
    const { userId } = req.auth();
    let isCreditDeducted = false;

    const { name = 'New Project', userPrompt, productName, productDescription, targetLength = 5 } = req.body;
    const aspectRatioRaw = Array.isArray(req.body.aspectRatio) ? req.body.aspectRatio[0] : req.body.aspectRatio;
    const aspectRatio = aspectRatioRaw || '9:16';

    const images: any = req.files;

    if (images.length < 2 || !productName) {
        return res.status(400).json({ message: 'Pls upload at least 2 images' })
    }

    const user = await prisma.user.findUnique({
        where: { id: userId }
    });

    if (!user || user.credits < 5) {
        return res.status(401).json({ message: 'Insufficient credits' })
    } else {
        //deduct credits for img generation
        await prisma.user.update({
            where: { id: userId },
            data: { credits: { decrement: 5 } }
        }).then(() => {
            isCreditDeducted = true;
        })
    }

    try {

        let uploadedImages = await Promise.all(
            images.map(async (item: any) => {
                let result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
                return result.secure_url
            })
        )

        const project = await prisma.project.create({
            data: {
                name,
                userId,
                productName,
                productDescription,
                userPrompt,
                aspectRatio: aspectRatio,
                targetLength: parseInt(targetLength as string),
                uploadedImages,
                isGenerating: true
            }
        })

        teamProjectId = project.id;

        //const model = 'gemini-3-pro-image-preview' --this we can ue if we get the free $300 credits
        const model = 'gemini-3.1-flash-image-preview';

        const GenerateConfig: GenerateContentConfig = {
            maxOutputTokens: 32768,
            temperature: 1,
            topP: 0.95,
            responseModalities: ['IMAGE'],
            imageConfig: {
                aspectRatio: aspectRatio || '9:16',
                imageSize: '1k'
            },
            safetySettings: [
                {
                    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
                    threshold: HarmBlockThreshold.OFF,
                },
                {
                    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
                    threshold: HarmBlockThreshold.OFF,
                },
                {
                    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
                    threshold: HarmBlockThreshold.OFF,
                },
                {
                    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
                    threshold: HarmBlockThreshold.OFF,
                },
            ]
        }

        //images to base64 for ai model
        const ima1base64 = loadImage(images[0].path, images[0].mimeType);
        const ima2base64 = loadImage(images[1].path, images[1].mimeType);

        const prompt = {
            text: ` Combine the person and product into a realistic photo.
            Make the person naturally hold or use the product.
            Match lighting, shadows, scale and perspective.
            Make the person stand in professional studio lighting.
            Output ecommerce- quality photo realistic imagery.
            ${userPrompt}`
        }

        //generate the img using ai model
        const response: any = await ai.models.generateContent({
            model,
            contents: [ima1base64, ima2base64, prompt],
            config: GenerateConfig,
        })

        //check if the response is valid
        if (!response?.candidates?.[0]?.content?.parts) {
            throw new Error('Unexpected response')
        }

        const parts = response.candidates[0].content.parts;

        let finalBuffer: Buffer | null = null

        for (const part of parts) {
            if (part.inlineData) {
                finalBuffer = Buffer.from(part.inlineData.data, 'base64');
            }
        }

        if (!finalBuffer) {
            throw new Error('Failed to generate image')
        }

        const base64Image = `data:image/png;base64,${finalBuffer.toString('base64')}`

        //upload the img to the cloudanry image storage
        const uploadResult = await cloudinary.uploader.upload(base64Image,
            { resource_type: 'image' }
        );

        //then also store img on database as well
        await prisma.project.update({
            where: { id: project.id },
            data: {
                generatedImage: uploadResult.secure_url,
                isGenerating: false
            }
        })

        res.json({ projectId: project.id })

    } catch (error: any) {

        if (teamProjectId!) {
            //update project status and error message
            await prisma.project.update({
                where: { id: teamProjectId },
                data: { isGenerating: false, error: error.message }
            })
        }

        if (isCreditDeducted) {
            //add back credits in error case
            await prisma.user.update({
                where: { id: userId },
                data: { credits: { increment: 5 } }
            })
        }

        Sentry.captureException(error);
        res.status(500).json({ message: error.message });
    }
}

//in 2nd part we create the video
export const createVideo = async (req: Request, res: Response) => {

    const { userId } = req.auth()
    const { projectId } = req.body;
    let isCreditDeducted = false;

    const user = await prisma.user.findUnique({
        where: { id: userId }
    })

    if (!user || user.credits < 5) {
        return res.status(401).json({ message: 'Insufficient credits' });
    }

    //deduct credits for video generation
    await prisma.user.update({
        where: { id: userId },
        data: { credits: { decrement: 10 } }
    }).then(() => { isCreditDeducted = true });

    try {

        const project = await prisma.project.findUnique({
            where: { id: projectId, userId },
            include: { user: true }
        })

        if (!project || project.isGenerating) {
            return res.status(404).json({ message: 'Generation in progress' });
        }

        if (project.generatedVideo) {
            return res.status(404).json({ message: 'Video already generated' });
        }

        await prisma.project.update({
            where: { id: projectId },
            data: { isGenerating: true }
        })

        const prompt = `make the person showcase the product which is ${project.productName} ${project.productDescription && "and Product Description: " + project.productDescription}`

        const model = 'veo-3.1-generate-preview'

        if (!project.generatedImage) {
            throw new Error('Generated image not found');
        }

        const image = await axios.get(project.generatedImage, { responseType: 'arraybuffer' })

        const imageBytes: any = Buffer.from(image.data)

        let operation: any = await ai.models.generateVideos({
            model,
            prompt,
            image: {
                imageBytes: imageBytes.toString('base64'),
                mimeType: 'image/png',
            },
            config: {
                aspectRatio: project?.aspectRatio || '9:16',
                numberOfVideos: 1,
                resolution: '720p',
            }
        })

        while (!operation.done) {
            console.log("Waiting for video generation to complete...");
            await new Promise((resolve) => setTimeout(resolve, 10000));
            operation = await ai.operations.getVideosOperation({
                operation: operation,
            })
        }

        const filename = `${userId}-${Date.now()}.mp4`;
        const filePath = path.join('videos', filename)

        //create the imgs directory if if doesn't exist
        fs.mkdirSync('videos', { recursive: true })

        if (!operation.response.generatedVideos) {
            throw new Error(operation.response.raiMediaFilteredReasons[0])
        }

        //Download the video.
        await ai.files.download({
            file: operation.response.generatedVideos[0].video,
            downloadPath: filePath
        })

        const uploadResult = await cloudinary.uploader.upload(filePath, {
            resource_type: 'video'
        })

        //then also store video on database as well
        await prisma.project.update({
            where: { id: projectId },
            data: {
                generatedVideo: uploadResult.secure_url,
                isGenerating: false
            }
        })

        //remove video file from disk after upload
        fs.unlinkSync(filePath);

        res.json({ message: 'Video generated successfully', videoUrl: uploadResult.secure_url })

    } catch (error: any) {

        //update project status and error message
        await prisma.project.update({
            where: { id: projectId, userId },
            data: { isGenerating: false, error: error.message }
        })

        if (isCreditDeducted) {
            //add back credits in error case
            await prisma.user.update({
                where: { id: userId },
                data: { credits: { increment: 10 } }
            })
        }
        Sentry.captureException(error);
        res.status(500).json({ message: error.message });
    }
}

//this section helps to get publish all projects
export const getAllPublishProjects = async (req: Request, res: Response) => {
    try {

        const projects = await prisma.project.findMany({
            where: {isPublished: true}
        })
        res.json({projects})

    } catch (error: any) {
        Sentry.captureException(error);
        res.status(500).json({ message: error.message });
    }
}

//this will delete project
export const deleteProject = async (req: Request, res: Response) => {
    try {

        const {userId} = req.auth();
        const {projectId} = req.params;

        const project = await prisma.project.findUnique({
            where: {id: projectId, userId}
        })

        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }

        await prisma.project.delete({
            where: {id: projectId, userId}
        })
        res.json({ message: 'Project deleted successfully' });

    } catch (error: any) {
        Sentry.captureException(error);
        res.status(500).json({ message: error.message });
    }
}
