import express from 'express';
import { getProjectList, createProject, getProject } from '../Controllers/projects.controller';
import { saveImage } from '../Middlewares/multer.middleware';

const router = express.Router();

router.get('/v1/projects', getProjectList);

router.post('/v1/project', saveImage, createProject);

router.get('/v1/project/:id', getProject);

export { router as projectRouter };