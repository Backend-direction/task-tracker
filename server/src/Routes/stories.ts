import express from 'express';
import { createStory, getStory, getStoryList } from '../Controllers/stories.controller';

const router = express.Router();

router.get('/v1/stories', getStoryList);

router.post('/v1/story', createStory);

router.get('/v1/story/:id', getStory);

export { router as storyRouter };