import UserModel from '../database/models/User.model';

export default class validateLoginService {
  loginServiceTwo = async (email: string) => {
    const user: UserModel | null = await UserModel.findOne({ where: { email } });
    console.log(user);
    return user?.role;
  };
}
