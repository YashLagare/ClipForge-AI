import * as Sentry from "@sentry/node";
import { v2 as cloudinary } from 'cloudinary';
import { Request, Response } from "express";
import { prisma } from "../lib/prisma.js";

//in first part we create img only
export const createProject = async (req: Request, res: Response) => {
    
    let teamProjectId: string;
    const { userId } = req.body;
    let isCreditDeducted = false;

    const { name = 'New  Project', aspectRatio, userPrompt, productName, productDescription, targetLength = 5 } = req.body;

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
                aspectRatio,
                targetLength: parseInt(targetLength),
                uploadedImages,
                isGenerating: true
            }
        })

        teamProjectId = project.id;

    } catch (error: any) {
        Sentry.captureException(error);
        res.status(500).json({ message: error.message });
    }
}

//in 2nd part we create the video
export const createVideo = async (req: Request, res: Response) => {
    try {

    } catch (error: any) {
        Sentry.captureException(error);
        res.status(500).json({ message: error.message });
    }
}

//this section helps to get publish all projects
export const getAllPublishProjects = async (req: Request, res: Response) => {
    try {

    } catch (error: any) {
        Sentry.captureException(error);
        res.status(500).json({ message: error.message });
    }
}

//this will delete project
export const deleteProject = async (req: Request, res: Response) => {
    try {

    } catch (error: any) {
        Sentry.captureException(error);
        res.status(500).json({ message: error.message });
    }
}