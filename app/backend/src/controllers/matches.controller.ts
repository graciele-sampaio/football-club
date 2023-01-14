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

  insertMatchesInProgress = async (req: Request, res: Response) => {
    const createMatches = await this.newService.insertMatchesInProgress(req.body);
    return res.status(201).json(createMatches);
  };

  updateMatchesInProgress = async (req: Request, res: Response) => {
    const updateMatch = await this.newService.updateMatchesInProgress(Number(req.params.id));
    return res.status(200).json({ updateMatch });
  };

  updateTeamGoalsMatches = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const { homeTeamGoals, awayTeamGoals } = req.body;
    const updateMatch = await this.newService
      .updateTeamGoalsMatches(id, homeTeamGoals, awayTeamGoals);
    return res.status(200).json({ updateMatch });
  };
}

export default MatchesController;
