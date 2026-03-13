import * as Sentry from "@sentry/node";
import { Request, Response } from 'express';
import { prisma } from "../lib/prisma.js";

//get user credits
export const getUserCredits = async (req: Request, res: Response) => {
    try {
        
        const {userId} = req.auth();
        if (!userId) {
            return res.status(401).json({message: 'Unauthorized'})
        }

        const user = await prisma.user.findUnique({
            where: {id: userId}
        })
        res.json({credits: user?.credits})

    } catch (error: any) {
        Sentry.captureException(error);
        res.status(500).json({ message: 'Error fetching user credits' });
    }
}

//get all users projects
export const getAllProjects = async (req: Request, res: Response) => {
    try {
        
        const {userId} = req.auth();
        const projects = await prisma.project.findMany({
            where: {userId},
            orderBy: {createdAt:'desc'}
        })
        res.json({projects})

    } catch (error: any) {
        Sentry.captureException(error);
        res.status(500).json({ message: 'Error fetching all projects' });
    }
}

//get project by id
export const getProjectById = async (req: Request, res: Response) => {
    try {
        
        const {userId} = req.auth();
        const projectIdRaw = req.params.projectId;
        const projectId = Array.isArray(projectIdRaw) ? projectIdRaw[0] : projectIdRaw;
        
        if (!projectId) {
            return res.status(400).json({message: 'Project ID required'});
        }

        const project = await prisma.project.findUnique({
            where: {id: projectId, userId}
        })
        if (!project) {
            return res.status(404).json({message: 'Project not found'})
        }
        
        res.json({project})


    } catch (error: any) {
        Sentry.captureException(error);
        res.status(500).json({ message: 'Error fetching project by id' });
    }
}

//publish or unpublish project
export const toggleProjectPublish = async (req: Request, res: Response) => {
    try {
        const {userId} = req.auth();
        const projectIdRaw = req.params.projectId;
        const projectId = Array.isArray(projectIdRaw) ? projectIdRaw[0] : projectIdRaw;
        
        if (!projectId) {
            return res.status(400).json({message: 'Project ID required'});
        }

        const project = await prisma.project.findUnique({
            where: { id: projectId, userId }
        });

        if (!project) {
            return res.status(404).json({message: 'Project not found'});
        }

         if (!project?.generatedImage && !project?.generatedVideo) {
            return res.status(404).json({message: 'Image or video not generated yet!'});
        }

        await prisma.project.update({
            where: { id: projectId },
            data: { isPublished: !project.isPublished }
        });

        res.json({isPublish: !project.isPublished})

    } catch (error: any) {
        Sentry.captureException(error);
        res.status(500).json({ message: 'Error publishing project' });
    }
}
