import express from 'express';
import { createProject, createVideo, deleteProject, getAllPublishProjects } from '../controllers/projectController.js';
import upload from '../lib/multer.js';
import { protect } from '../middlewares/auth.js';


const projectRouter = express.Router()

projectRouter.post('/create',upload.array('images', 2), protect, createProject)
projectRouter.post('/video', protect, createVideo)
projectRouter.get('/publish', protect, getAllPublishProjects)
projectRouter.delete('/:projectId', protect, deleteProject)

export default projectRouter;