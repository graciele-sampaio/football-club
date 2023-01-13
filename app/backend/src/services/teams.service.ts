import TeamModel from '../database/models/Team.model';

class TeamService {
  getAllTeams = async () => {
    const allTeams = await TeamModel.findAll();
    return { type: 200, message: allTeams };
  };

  getIdTeams = async (id: string | number) => {
    const teamsById = await TeamModel.findOne({ where: { id } });
    if (teamsById) return { type: 200, message: teamsById };
    return { type: 400, message: 'Team not found' };
  };
}

export default TeamService;
