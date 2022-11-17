import express from 'express';
import path from 'path';
import { json } from 'body-parser';

import 'reflect-metadata';
import './db';

import { projectRouter } from './Routes/projects';
import { userRouter } from './Routes/users';
import { teamRouter } from './Routes/teams';
import { memberRouter } from './Routes/team-members';
import { productOwnerRouter } from './Routes/product-owner';

const app = express();

app.use(express.static(path.join(__dirname, '../public/uploads')));

app.use(json());

app.use(projectRouter);
app.use(userRouter);
app.use(teamRouter);
app.use(memberRouter);
app.use(productOwnerRouter);

app.all('*', (req) => {
  console.log('url', req.url)
  throw new Error('Route not found');
});

export { app };