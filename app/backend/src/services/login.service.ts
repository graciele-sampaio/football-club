import * as Bcrypt from 'bcryptjs';
import JwtEncoded from '../utils/JwtEncoded';
import UserModel from '../database/models/User.model';

class LoginService {
  jwt = new JwtEncoded();
  loginServiceTwo = async (email: string, password: string) => {
    const user: UserModel | null = await UserModel.findOne({ where: { email } });

    if (!user) return { type: 401, response: { message: 'Incorrect email or password' } };

    const encryptedPassword = Bcrypt.compareSync(password, user?.password);

    if (!encryptedPassword) {
      return { type: 401, response: { message: 'Incorrect email or password' } };
    }

    return { type: 200, response: { token: this.jwt.createToken({ email }) } };
  };
}

export default LoginService;
