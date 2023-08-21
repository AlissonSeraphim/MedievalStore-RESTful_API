import { Router } from 'express';
import LoginController from '../controllers/loginController';
import ensureLoginValidation from '../middlewares/loginValidation';

const loginRouter = Router();

loginRouter.post('/', ensureLoginValidation, LoginController.createSession);

export default loginRouter;