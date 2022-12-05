import { Request, Response } from 'express';
import AppDataSource from '../db';
import { ProductOwner } from '../Models/product-owner';
import { Project } from '../Models/project';
import { Team } from '../Models/team';
import { getProductOwnerById } from './product-owner.controller';
import { getTeamById } from './teams.controller';

const getProjectList = async (_req: Request, res: Response) => {
  const projects = await AppDataSource.query(`SELECT * FROM projects`);

  res.send(projects);
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

const getProjectById = async (req: Request, res: Response) => {
  const id  = +req.params.id;
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

  res.status(200).send(project);
}

export { getProjectList, createProject, getProjectById };