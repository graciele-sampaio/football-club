import { NextFunction, Request, Response } from 'express';
import JwtDecoded from '../utils/jwtDecoded';

const validateJwtRouteMatches = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
  const jwtDecodedInstace = new JwtDecoded();
  try {
    const decoded = jwtDecodedInstace.verifyToken(authorization);
    res.locals.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
};

export default validateJwtRouteMatches;
