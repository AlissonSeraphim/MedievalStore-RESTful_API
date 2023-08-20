import * as express from 'express';
import productsController from '../controllers/index';

const routes = express.Router();

routes.post('/', productsController.productsController.createProduct);

routes.get('/', productsController.productsController.getProducts);

export default routes;