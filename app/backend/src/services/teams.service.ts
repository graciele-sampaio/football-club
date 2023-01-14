import TeamModel from '../database/models/Team.model';

class TeamService {
  getAllTeams = async () => {
    const allTeams = await TeamModel.findAll();
    return { type: 200, message: allTeams };
  };

  getIdTeams = async (id: number) => {
    const teamsById : TeamModel | null = await TeamModel.findOne({ where: { id } });
    if (!teamsById) return { type: 404, response: { message: 'Id not found' } };
    return { type: 200, response: teamsById };
  };

  getIdFormIddleware = async (id: number) => {
    const teamsById : TeamModel | null = await TeamModel.findOne({ where: { id } });
    return teamsById;
  };
}

export default TeamService;
