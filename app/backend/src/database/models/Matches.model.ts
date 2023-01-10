import { INTEGER, Model } from 'sequelize';
import db from '.';

export default class Matches extends Model {
  declare id: number;
  declare username: string;
  declare role: string;
  declare email: string;
  declare password: string;
}

Matches.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  homeTeamGoals: {
    type: INTEGER,
  },
  homeTeam: {
    type: INTEGER,
  },
  awayTeam: {
    type: INTEGER,
  },
  awayTeamsGoals: {
    type: INTEGER,
  },
  inProgress: {
    type: INTEGER,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'matches',
  timestamps: false,
});
