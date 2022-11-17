import { Request, Response } from 'express';
import { UpdateResult } from 'typeorm';
import AppDataSource from "../db";
import { ProductOwner } from '../Models/product-owner';
import { User } from '../Models/user';
import { getUserById } from './users.controller';

const getOwnerList = async (_req: Request, res: Response) => {
  const productOwnersRepository = AppDataSource.getRepository(ProductOwner);
  let productOwners: ProductOwner[];

  try {
    productOwners = await productOwnersRepository.find({
      relations: {
        user: true
      },
    })
  } catch(e) {
    throw new Error(e);
  }

  res.send(productOwners);
};

const createOwner = async (req: Request, res: Response) => {
  let user: User;
  const userId = req.body.userId;
  
  try {
    user = await getUserById(userId);
  } catch(e) {
    throw new Error(e);
  }

  const productOwnersRepository = AppDataSource.getRepository(ProductOwner);
  const productOwner = new ProductOwner();

  productOwner.capacity = req.body.capacity;
  productOwner.user = user;

  try {
    await productOwnersRepository.save(productOwner);
  } catch (error) {
    throw new Error('Failed to create new product owner');
  }

  res.status(201).send(productOwner);
};

const updateOwner = async (req, res) => {
  let result: UpdateResult;
  const productOwnerId = +req.params.id;
  const capacity = req.body.capacity;

  const productOwnersRepository = AppDataSource.getRepository(ProductOwner);

  try {
    result = await productOwnersRepository.createQueryBuilder()
      .update(ProductOwner)
      .set({ capacity })
      .where("id = :id", { id: productOwnerId })
      .returning('*')
      .execute();
  } catch(e) {
    throw new Error('Could not update product owner' + productOwnerId);
  }

  res.status(200).send(result.raw[0])
}

export { getOwnerList, createOwner, updateOwner };