import { Router } from 'express';
import loginRoute from './login.routes';
import teamRoute from './teams.routes';

const routes = Router();

routes.use('/login', loginRoute);
routes.use('/teams', teamRoute);

export default routes;
