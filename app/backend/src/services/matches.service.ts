import IMatches from '../interfaces/IMatches';
import MatchesModel from '../database/models/Matches.model';
import TeamModel from '../database/models/Team.model';

class MatchesService {
  getAllMatches = async () => {
    const allMatches = await MatchesModel.findAll({ include:
      [{
        model: TeamModel,
        as: 'teamHome',
        attributes: { exclude: ['id'] },
      },
      {
        model: TeamModel,
        as: 'teamAway',
        attributes: { exclude: ['id'] },
      }] });
    return { type: 200, message: allMatches };
  };

  getMatchesInProgress = async (status: string) => {
    const matchesInProgress = await MatchesModel.findAll({
      where: { inProgress: status === 'true' },
      include:
        [{
          model: TeamModel,
          as: 'teamHome',
          attributes: { exclude: ['id'] },
        },
        {
          model: TeamModel,
          as: 'teamAway',
          attributes: { exclude: ['id'] },
        }],
    });
    return { type: 200, message: matchesInProgress };
  };

  insertMatchesInProgress = async (param: IMatches) => {
    const insertMatch = await MatchesModel.create({
      homeTeam: param.homeTeam,
      awayTeam: param.awayTeam,
      homeTeamGoals: param.homeTeamGoals,
      awayTeamGoals: param.awayTeamGoals,
      inProgress: true,
    });
    return insertMatch;
  };
}

export default MatchesService;
