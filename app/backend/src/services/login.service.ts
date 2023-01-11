import JwtEncoded from '../utils/JwtEncoded';
import UserModel from '../database/models/User.model';

class LoginService {
  jwt = new JwtEncoded();
  loginServiceTwo = async (email: string, password: string) => {
    const user = await UserModel.findOne({ where: { email } });
    if (user) return { type: 200, response: { token: this.jwt.createToken({ email, password }) } };
    return { type: 401, response: { message: 'Incorrect email or password' } };
  };
}

export default LoginService;
