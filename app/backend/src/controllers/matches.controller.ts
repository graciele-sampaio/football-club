import { Request, Response } from 'express';
import MatchesService from '../services/matches .service';

class MatchesController {
  newService = new MatchesService();
  getAllMatches = async (req: Request, res: Response) => {
    const { message } = await this.newService.getAllMatches();
    return res.status(200).json(message);
  };
}

export default MatchesController;
