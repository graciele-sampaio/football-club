import { Request, Response } from 'express';
import TeamService from '../services/teams.service';

class TeamController {
  newService = new TeamService();
  getAllTeams = async (req: Request, res: Response) => {
    const { message } = await this.newService.getAllTeams();
    return res.status(200).json(message);
  };

  getIdTeams = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { message } = await this.newService.getIdTeams(id);
    return res.status(200).json(message);
  };
}

export default TeamController;
