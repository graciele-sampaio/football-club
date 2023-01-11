import * as jwt from 'jsonwebtoken';
import IUser from '../interfaces/IUser';
import 'dotenv/config';

class jwtEncoded {
  createToken = (user: IUser) => {
    const token = jwt.sign({ user }, process.env.JWT_SECRET as string, {
      expiresIn: '9d',
      algorithm: 'HS256',
    });
    return token;
  };
}

export default jwtEncoded;
