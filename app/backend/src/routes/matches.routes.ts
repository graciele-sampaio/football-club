import { Router } from 'express';
import MatchesController from '../controllers/matches.controller';

const matchesRoute = Router();

const newMatchesController = new MatchesController();

matchesRoute.get('/', newMatchesController.getAllMatches);

export default matchesRoute;
