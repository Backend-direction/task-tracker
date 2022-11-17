import express from 'express';
import { addTeamMember, getMembersByTeamId } from '../Controllers/team-members.controller';

const router = express.Router();

router.get('/v1/members/:id', getMembersByTeamId);

router.post('/v1/members', addTeamMember);

export { router as memberRouter };