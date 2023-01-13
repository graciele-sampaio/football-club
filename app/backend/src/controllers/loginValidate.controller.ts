import { Request, Response } from 'express';
import ValidateLoginService from '../services/loginValidate.service';

export default class validateLoginController {
  validateLoginControllerTwo = async (req: Request, res: Response) => {
    const role = await this.serviceInstance.loginServiceTwo(res.locals.user.email);
    return res.status(200).json({ role });
  };

  serviceInstance = new ValidateLoginService();
}
