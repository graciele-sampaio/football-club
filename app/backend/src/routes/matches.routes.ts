import { Router } from 'express';
import MatchesController from '../controllers/matches.controller';
import validateMatches from '../middlewares/validateMatches.middleware';
import validateTeams from '../middlewares/validateTeams.middleware';
import validateJwtRouteMatches from '../middlewares/validateRouteMatches.middleware';

const matchesRoute = Router();

const newMatchesController = new MatchesController();

matchesRoute.get('/', newMatchesController.execute);
matchesRoute.post(
  '/',
  validateJwtRouteMatches,
  validateMatches,
  validateTeams,
  newMatchesController.insertMatchesInProgress,
);
matchesRoute.patch('/:id/finish', newMatchesController.updateMatchesInProgress);
matchesRoute.patch('/:id', newMatchesController.updateTeamGoalsMatches);

export default matchesRoute;
