import { Request, Response } from 'express';
import AppDataSource from "../db";
import { User } from '../Models/user';

const getUserList = async (_req: Request, res: Response) => {
  const users = await AppDataSource.query(`SELECT * FROM users`);

  res.send(users);
};

const createUser = async (req: Request, res: Response) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = new User();

  user.name = req.body.name;
  user.surname = req.body.surname;
  user.email = req.body.email;
  user.status = req.body.status;

  // should trow error which will be handled at top,
  // or send some specific status 
  try {
    await userRepository.save(user);
  } catch (error) {
    throw new Error('Failed to create new user');
  }

  res.status(201).send(user);
};


const getUserById = async (id) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({ where: { id }});

  if(!user) throw new Error('User was not found'); 

  return user;
}

export { getUserList, createUser, getUserById };