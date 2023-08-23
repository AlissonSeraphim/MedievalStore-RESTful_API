import { Router } from 'express';
import LoginController from '../controllers/loginController';
import ensureCreateLoginValidation from '../middlewares/ensureCreateLoginValidation';

const loginRouter = Router();

loginRouter.post('/', ensureCreateLoginValidation, LoginController.createSession);

export default loginRouter;