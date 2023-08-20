import * as express from 'express';
import productsController from '../controllers/index';

const routes = express.Router();

routes.post('/', productsController.productsController.createProduct);

export default routes;