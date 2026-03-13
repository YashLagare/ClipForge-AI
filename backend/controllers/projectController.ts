import * as Sentry from "@sentry/node";
import { Request, Response } from "express";

//in first part we create img only
export const createProject = async (req:Request, res: Response) => {
    try {
        
    } catch (error: any) {
        Sentry.captureException(error);
        res.status(500).json({message: error.message});
    }
}

//in 2nd part we create the video
export const createVideo = async (req:Request, res: Response) => {
    try {
        
    } catch (error: any) {
        Sentry.captureException(error);
        res.status(500).json({message: error.message});
    }
}

//this section helps to get publish all projects
export const getAllPublishProjects = async (req:Request, res: Response) => {
    try {
        
    } catch (error: any) {
        Sentry.captureException(error);
        res.status(500).json({message: error.message});
    }
}

//this will delete project
export const deleteProject = async (req:Request, res: Response) => {
    try {
        
    } catch (error: any) {
        Sentry.captureException(error);
        res.status(500).json({message: error.message});
    }
}