import { Request, Response } from 'express';
import AppDataSource from "../db";
import { Team } from '../Models/team';

const getTeamList = async (_req: Request, res: Response) => {
  const teams = await AppDataSource.query(`SELECT * FROM teams`);

  res.send(teams);
};

const createTeam = async (req: Request, res: Response) => {
  const teamRepository = AppDataSource.getRepository(Team);
  const team = new Team();

  team.name = req.body.name;

  // should trow error which will be handled at top,
  // or send some specific status 
  try {
    await teamRepository.save(team);
  } catch (error) {
    throw new Error('Failed to create new user');
  }

  res.status(201).send(team);
};

const getTeamById = async (id) => {
  const teamRepository = AppDataSource.getRepository(Team);
  const team = teamRepository.findOne({ where: { id }});

  if(!team) throw new Error('Team was not found'); 

  return team;
}

export { getTeamList, createTeam, getTeamById };