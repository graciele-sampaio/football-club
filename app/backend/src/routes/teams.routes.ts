import { Router } from 'express';
import TeamController from '../controllers/teams.controller';

const teamRoute = Router();

const newTeamController = new TeamController();

teamRoute.get('/', newTeamController.getAllTeams);
teamRoute.get('/:id', newTeamController.getIdTeams);

export default teamRoute;
