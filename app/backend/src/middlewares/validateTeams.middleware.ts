import { NextFunction, Request, Response } from 'express';
import TeamService from '../services/teams.service';

const validateTeams = async (req: Request, res: Response, next: NextFunction) => {
  const { homeTeam, awayTeam } = req.body;
  const newService = new TeamService();

  const teamHome = await newService.getIdFormIddleware(homeTeam);
  const teamAway = await newService.getIdFormIddleware(awayTeam);

  if (!teamHome || !teamAway) {
    return res.status(404).json({
      message: 'There is no team with such id!' });
  }

  next();
};

export default validateTeams;
