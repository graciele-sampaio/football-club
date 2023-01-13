import { NextFunction, Request, Response } from 'express';
import JwtDecoded from '../utils/jwtDecoded';

const validateJwt = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(400).json({ message: 'Invalid token' });
  }
  const jwtDecodedInstace = new JwtDecoded();
  try {
    const decoded = jwtDecodedInstace.verifyToken(authorization);
    res.locals.user = decoded;
    next();
  } catch (error) {
    return res.status(400).json({ message: 'Invalid token' });
  }
};

export default validateJwt;
