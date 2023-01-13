import { Router } from 'express';
import loginRoute from './login.routes';
import teamRoute from './teams.routes';
import matchesRoute from './matches.routes';

const routes = Router();

routes.use('/login', loginRoute);
routes.use('/teams', teamRoute);
routes.use('/matches', matchesRoute);

export default routes;
