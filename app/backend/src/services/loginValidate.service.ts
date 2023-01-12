import * as bcryptjs from 'bcryptjs';
import UserModel from '../database/models/User.model';

export default class validateLoginService {
  loginServiceTwo = async (email: string, password: string) => {
    const user: UserModel | null = await UserModel.findOne({ where: { email } });

    if (user) {
      return bcryptjs
        .compareSync(password, user?.password) && { type: 200, message: { role: 'admin' } };
    }
  };
}
