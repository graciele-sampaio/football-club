import { Router } from 'express';
import validateDataLogin from '../middlewares/validateLogin.middleware';
import LoginController from '../controllers/login.controller';
import ValidateLoginController from '../controllers/loginValidate.controller';
import validateJwt from '../middlewares/validateJwt.middleware';

const loginRoute = Router();

const newLoginController = new LoginController();
const newValidateLoginController = new ValidateLoginController();

loginRoute.post('/', validateDataLogin, newLoginController.loginControllerTwo);
loginRoute.get('/validate', validateJwt, newValidateLoginController.validateLoginControllerTwo);

export default loginRoute;
