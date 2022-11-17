import { Request, Response } from 'express';
import AppDataSource from '../db';
import { Project } from '../Models/project';

const getProjectList = async (_req: Request, res: Response) => {
  const projects = await AppDataSource.query(`SELECT * FROM projects`);

  res.send(projects);
};

const createProject = async (req: any, res: Response) => {
  const projectRepository = AppDataSource.getRepository(Project);
  const project = new Project();

  project.name = req.body.name;
  project.description = req.body.description;
  project.image = req?.file?.filename || '';
  project.rate = 0;

  try {
    await projectRepository.save(project);
  } catch (error) {
    throw new Error('Failed to create new Project');
  }

  res.status(201).send(project);
};

export { getProjectList, createProject };