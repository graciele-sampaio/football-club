import { NextFunction, Request, Response } from 'express';

const authToken = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  next();
};

export default authToken;
