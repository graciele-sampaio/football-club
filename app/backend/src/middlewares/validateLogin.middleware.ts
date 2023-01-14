import { NextFunction, Request, Response } from 'express';
import loginSchema from './schemas';

const validateDataLogin = (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  const { error } = loginSchema.validate(req.body);

  if (!body.email || !body.password) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }

  if (error) {
    return res.status(401).json({ message: 'Incorrect email or password' });
  }

  next();
};

export default validateDataLogin;
