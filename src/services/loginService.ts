import CreateSession from '../types/CreateSession';
import ServiceResponse from '../types/ServiceResponse';
import { Token } from '../types/Token';
import UserModel from '../database/models/user.model';
import JwtUtil from '../utils/Jwt';
import BcryptUtil from '../utils/Bcrypt';

const createSession = async ({
  username, password,
}: CreateSession): Promise<ServiceResponse<Token>> => {
  const user = await UserModel.findOne({ where: { username } });

  if (!user) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
  }

  const passwordMatch = BcryptUtil.compare(password, user.dataValues.password);

  if (!passwordMatch) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
  }

  const token = JwtUtil.sing({
    id: user.dataValues.id,
    username: user.dataValues.username,
  });

  return { status: 'OK', data: { token } };
};

export default {
  createSession,
};