import { Request, Response } from 'express';
import LeaderboardHomeService from '../services/leaderboardHome.service';

class LeaderboardHomeController {
  newService = new LeaderboardHomeService();
  leaderboardHomeControllerTwo = async (req: Request, res: Response) => {
    const teamHome = req.path.split('/', 2)[1];
    console.log(req.path);
    const teamAway = teamHome === 'home' ? 'away' : 'home';
    const [response] = await this.newService.queryLeadboardHome(teamHome, teamAway);
    return res.status(200).json(response);
  };
}

export default LeaderboardHomeController;
