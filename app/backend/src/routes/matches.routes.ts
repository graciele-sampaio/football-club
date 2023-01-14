import { Router } from 'express';
import validateJwt from '../middlewares/jwt.middleware';
import MatchesController from '../controllers/matches.controller';

const matchesRoute = Router();

const newMatchesController = new MatchesController();

matchesRoute.get('/', newMatchesController.execute);
matchesRoute.post('/', validateJwt, newMatchesController.insertMatchesInProgress);

export default matchesRoute;
