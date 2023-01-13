import { Request, Response } from 'express';
import MatchesService from '../services/matches.service';

class MatchesController {
  newService = new MatchesService();
  getAllMatches = async (req: Request, res: Response) => {
    const { message } = await this.newService.getAllMatches();
    return res.status(200).json(message);
  };

  matchesInProgress = async (req: Request, res: Response) => {
    const { message } = await this.newService.getMatchesInProgress(req.query.inProgress as string);
    return res.status(200).json(message);
  };

  execute = async (req: Request, res: Response) => {
    if (req.query.inProgress) return this.matchesInProgress(req, res);
    this.getAllMatches(req, res);
  };
}

export default MatchesController;
