import * as express from 'express';
import ordersController from '../controllers/ordersController';

const routes = express.Router();

routes.get('/', ordersController.getOrders);

export default routes;