import express from 'express';
import { createOwner, getOwnerList, updateOwner } from '../Controllers/product-owner.controller';

const router = express.Router();

router.get('/v1/owners', getOwnerList);

router.post('/v1/owners', createOwner);

router.put('/v1/owners/:id', updateOwner);

export { router as productOwnerRouter };