import sequelize from '../database/models';

class LeaderboardHomeService {
  queryLeadboardHome = (teamHome: string, teamAway: string) => {
    const query = sequelize.query(`SELECT teams.team_name  as 'name',
    (COUNT(CASE WHEN ${teamHome}_team_goals > ${teamAway}_team_goals THEN 1 END)*3)
    +(COUNT(CASE WHEN ${teamHome}_team_goals = ${teamAway}_team_goals THEN 1 END)) as 'totalPoints',
    SUM(M.in_progress = 0) as 'totalGames',
    SUM(${teamHome}_team_goals > ${teamAway}_team_goals) as 'totalVictories',              
    SUM(${teamHome}_team_goals = ${teamAway}_team_goals) as 'totalDraws',
    SUM(${teamHome}_team_goals < ${teamAway}_team_goals) as 'totalLosses',
    SUM(${teamHome}_team_goals) as 'goalsFavor', SUM(${teamAway}_team_goals) as 'goalsOwn',
    SUM(${teamHome}_team_goals - ${teamAway}_team_goals) as 'goalsBalance',
    ROUND(((SUM(${teamHome}_team_goals > ${teamAway}_team_goals) * 3)
          + SUM(${teamHome}_team_goals = ${teamAway}_team_goals))
           / (COUNT(${teamHome}_team) * 3) * 100,2) 'efficiency'
    FROM matches M INNER JOIN teams ON teams.id = ${teamHome}_team 
    WHERE M.in_progress = 0 GROUP BY teams.team_name ORDER BY totalPoints DESC, 
    totalVictories DESC, goalsBalance DESC, goalsFavor DESC`);
    return query;
  };
}
export default LeaderboardHomeService;
