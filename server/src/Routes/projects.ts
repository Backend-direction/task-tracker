import express from 'express';
import { getProjectList, createProject, getProjectById } from '../Controllers/projects.controller';
import { saveImage } from '../Middlewares/multer.middleware';

const router = express.Router();

router.get('/v1/projects', getProjectList);

router.post('/v1/project', saveImage, createProject);

router.get('/v1/project/:id', getProjectById);

export { router as projectRouter };