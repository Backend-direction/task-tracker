import { Request, Response } from 'express';
import AppDataSource from '../db';
import { ProductOwner } from '../Models/product-owner';
import { Project } from '../Models/project';
import { Team } from '../Models/team';
import { getProductOwnerById } from './product-owner.controller';
import { getTeamById } from './teams.controller';

const getProjectList = async (_req: Request, res: Response) => {
  let projects: Project[];
  
  try {
    projects = await AppDataSource.query(`SELECT * FROM projects`);
  } catch (err) {
    res.status(500).send(err.message)
  }

  res.status(200).send(projects);
};

const createProject = async (req: any, res: Response) => {
  const projectRepository = AppDataSource.getRepository(Project);
  const project = new Project();
  let productOwner: ProductOwner;
  let team: Team;

  try {
    productOwner = await getProductOwnerById(req.body.product_owner_id);
    team = await getTeamById(req.body.team_id);
  } catch (error) {
    throw new Error(`Could not find item to create project, ${error}`);
  }

  project.name = req.body.name;
  project.description = req.body.description;
  project.image = req?.file?.filename || '';
  project.productOwner = productOwner;
  project.team = team;
  project.rate = 0;

  try {
    await projectRepository.save(project);
  } catch (error) {
    throw new Error(`Failed to create new Project, ${error}`);
  }

  res.status(201).send(project);
};

const getProject = async (req: Request, res: Response) => {
  const id  = +req.params.id;
  let project: Project;

  try {
    project = await findProjectById(id);
  } catch (error) {
    res.status(404).send(error.message);
  }

  res.status(200).send(project);
}

const findProjectById = async (id: number): Promise<Project> => {
  if(!id) throw new Error('Project id is not valid');

  const projectRepository = AppDataSource.getRepository(Project);
  const project = await projectRepository.findOne({
    where: { id },
    relations: {
      team: true,
      productOwner: {
        user: true
      },
    }
  });

  if(!project) throw new Error('Project was not found');

  return project;
}

export { getProjectList, createProject, getProject, findProjectById };