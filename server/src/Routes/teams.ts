import express from 'express';
import { createTeam, getTeamList } from '../Controllers/teams.controller';

const router = express.Router();

router.get('/v1/teams', getTeamList);

router.post('/v1/teams', createTeam);

export { router as teamRouter };