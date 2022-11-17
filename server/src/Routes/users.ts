import express from 'express';
import { createUser, getUserList } from '../Controllers/users.controller';

const router = express.Router();

router.get('/v1/users', getUserList);

router.post('/v1/users', createUser);

export { router as userRouter };