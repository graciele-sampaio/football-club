import { Router } from 'express';
import LeaderboardHomeController from '../controllers/leaderboard.controller';

const leaderboardRoute = Router();

const newLeaderboardController = new LeaderboardHomeController();

leaderboardRoute.get('/home', newLeaderboardController.leaderboardHomeControllerTwo);
leaderboardRoute.get('/away', newLeaderboardController.leaderboardHomeControllerTwo);

export default leaderboardRoute;
