import express from 'express';
import path from 'path';
import { json } from 'body-parser';

import swaggerUi from 'swagger-ui-express';
import { swaggerDocs } from '../docs'
import YAML from 'yamljs';

import 'reflect-metadata';
import './db';

import { projectRouter } from './Routes/projects';
import { userRouter } from './Routes/users';
import { teamRouter } from './Routes/teams';
import { memberRouter } from './Routes/team-members';
import { productOwnerRouter } from './Routes/product-owner';
import { storyRouter } from './Routes/stories';

const app = express();

// const swaggerDocs = YAML.load(path.join(__dirname, './swagger.yml'));
app.use('/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(express.static(path.join(__dirname, '../public/uploads')));

app.use(json());

app.use(projectRouter);
app.use(userRouter);
app.use(teamRouter);
app.use(memberRouter);
app.use(productOwnerRouter);
app.use(storyRouter);

app.all('*', (req) => {
  throw new Error('Route not found' + req.url);
});

export { app };