import * as express from 'express';
import { createProduct, getProducts } from '../controllers/productsController';
import ensureCreateProductValidation from '../middlewares/ensureCreateProductValidation.middleware';

const routes = express.Router();

routes.post(
  '/', 
  ensureCreateProductValidation, 
  createProduct,
);

routes.get('/', getProducts);

export default routes;