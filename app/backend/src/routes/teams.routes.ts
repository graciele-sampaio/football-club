import { Router } from 'express';
import TeamController from '../controllers/team.controller';

const teamRoute = Router();

const newTeamController = new TeamController();

teamRoute.get('/', newTeamController.getAllTeams);
teamRoute.get('/:id', newTeamController.getIdTeams);

export default teamRoute;
