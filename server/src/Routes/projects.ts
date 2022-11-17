import express from 'express';
import { getProjectList, createProject } from '../Controllers/projects.controller';
import { saveImage } from '../Middlewares/multer.middleware';

const router = express.Router();

router.get('/v1/projects', getProjectList);

router.post('/v1/project', saveImage, createProject);

export { router as projectRouter };