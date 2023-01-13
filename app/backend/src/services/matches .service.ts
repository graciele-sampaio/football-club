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
}

export default MatchesService;
