import { Router } from 'express';
import validateDataLogin from '../middlewares/login.middleware';
import authToken from '../middlewares/auth.middleware';
import LoginController from '../controllers/login.controller';

const loginRoute = Router();

const newLoginController = new LoginController();

loginRoute.post('/', validateDataLogin, newLoginController.loginControllerTwo);
loginRoute.get('/validate', authToken);

export default loginRoute;
