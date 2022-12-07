import { Request, Response } from 'express';
import AppDataSource from "../db";
import { Project } from '../Models/project';
import { Story } from '../Models/story';
import { Member } from '../Models/team-member';
import { findProjectById } from './projects.controller';
import { getTeamMemberById } from './team-members.controller';

const getStoryList = async (_req: Request, res: Response) => {
  const stroies = await AppDataSource.query(`SELECT * FROM stories`);

  res.send(stroies);
};

const createStory = async (req: any, res: Response) => {
  const storyRepository = AppDataSource.getRepository(Story);
  const story = new Story();
  let project: Project;
  let teamMember: Member;

  try {
    project = await findProjectById(req.body.projectId);
    teamMember = await getTeamMemberById(req.body.memberId);
  } catch (error) {
    throw new Error(`Could not find item to create project, ${error}`);
  }

  story.name = req.body.name;
  story.description = req.body.description;
  story.project = project;
  story.status = req.body.status;
  story.member = teamMember;
  story.estimate = req.body?.estimate || 0;

  try {
    await storyRepository.save(story);
  } catch (error) {
    throw new Error(`Failed to create new Story, ${error}`);
  }

  res.status(201).send(story);
};

const getStory = async (req: any, res: Response) => {
  const id  = +req.params.id;
  let story: Story;

  try {
    story = await findStoryById(id);
  } catch(error) {
    res.status(404).send(error.message);
  }

  res.status(200).send(story);
}

const findStoryById = async (id: number): Promise<Story> => {
  const storyRepository = AppDataSource.getRepository(Story);

  const story = await storyRepository.findOne({
    where: { id },
    relations: {
      member: {
        team: true,
        user: true,
      },
      project: true
    }
  });

  if(!story) throw new Error('Story was not found!');

  return story;
}


export { getStoryList, createStory, getStory, findStoryById };