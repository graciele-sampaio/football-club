import { Request, Response } from 'express';

export default class validateLoginController {
  validateLoginControllerTwo = async (req: Request, res: Response) => {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(400).json({ message: 'Invalid token' });
    }
    return res.status(200).json({ role: 'admin' });
  };
}
