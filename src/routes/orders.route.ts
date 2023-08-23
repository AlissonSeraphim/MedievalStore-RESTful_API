import * as express from 'express';
import ordersController from '../controllers/ordersController';
import ensureAuthentication from '../middlewares/ensureAuthentication.middleware';
import ensureCreateOrderValidation from '../middlewares/ensureCreateOrderValidation';

const routes = express.Router();

routes.get('/', ordersController.getOrders);
routes.post('/', ensureAuthentication, ensureCreateOrderValidation, ordersController.createOrder);

export default routes;