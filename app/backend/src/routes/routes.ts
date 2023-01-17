import { Router } from 'express';
import loginRoute from './login.routes';
import teamRoute from './teams.routes';
import matchesRoute from './matches.routes';
import leaderboardRoute from './leaderboard.routes';

const routes = Router();

routes.use('/login', loginRoute);
routes.use('/teams', teamRoute);
routes.use('/matches', matchesRoute);
routes.use('/leaderboard', leaderboardRoute);

export default routes;
