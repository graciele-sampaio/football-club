import { Request, Response } from 'express';
import LoginService from '../services/login.service';

class loginController {
  newService = new LoginService();
  loginControllerTwo = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const { type, response } = await this.newService.loginServiceTwo(email, password);
    return res.status(type).json(response);
  };
}

export default loginController;
