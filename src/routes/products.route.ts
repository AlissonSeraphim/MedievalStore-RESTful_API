import * as express from 'express';
import productsController from '../controllers/index';
import ensureProductValidation from '../middlewares/productValidation';

const routes = express.Router();

routes.post('/', ensureProductValidation, productsController.productsController.createProduct);

routes.get('/', productsController.productsController.getProducts);

export default routes;