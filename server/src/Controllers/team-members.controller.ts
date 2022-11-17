import { Request, Response } from 'express';
import AppDataSource from '../db';
import { Project } from '../Models/project';
import { Team } from '../Models/team';
import { Member } from '../Models/team-member';
import { User } from '../Models/user';
import { getTeamById } from './teams.controller';
import { getUserById } from './users.controller';

const getMembersByTeamId = async (req: Request, res: Response) => {
  const teamId = +req.params.id;

  const membersRepository = AppDataSource.getRepository(Member);
  const members = await membersRepository.find({
    relations: {
      team: true,
      user: true,
    },
    where: {
      team: {
        id: teamId
      }
    }
  });

  res.send(members);
};

const addTeamMember = async (req: any, res: Response) => {
  const teamId = req.body.teamId;
  const userId = req.body.userId;
  let team: Team;
  let user: User;

  try {
    team = await getTeamById(teamId);
    user = await getUserById(userId);
  } catch(e) {
    throw new Error(e);
  }

  const membersRepository = AppDataSource.getRepository(Member);
  const member = new Member();

  member.team = team;
  member.user = user;

  try {
    await membersRepository.save(member);
  } catch (error) {
    throw new Error('Failed to create add new Team member');
  }

  res.status(201).send(member);
};

export { getMembersByTeamId, addTeamMember };