import * as jwt from 'jsonwebtoken';
import 'dotenv/config';
import IUser from '../interfaces/IUser';

class jwtDecoded {
  verifyToken = (token: string) => {
    jwt.verify(token, process.env.JWT_SECRET as string);
    const decoded = jwt.decode(token);
    return decoded as IUser;
  };
}

export default jwtDecoded;
