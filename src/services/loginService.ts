import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import { CreateSession } from '../types/CreateSession';
import ServiceResponse from '../types/ServiceResponse';
import { Token } from '../types/Token';
import UserModel from '../database/models/user.model';
import { TokenPayload } from '../types/TokenPayload';
import jwtConfig from '../configs/auth';

const createSession = async ({
  username, password,
}: CreateSession): Promise<ServiceResponse<Token>> => {
  const user = await UserModel.findOne({ where: { username } });

  if (!user || !bcrypt.compareSync(password, user.dataValues.password)) {
    return { status: 'UNAUTHORIZED', data: { message: 'Username or password invalid' } };
  }

  const payload: TokenPayload = {
    id: user.dataValues.id,
    username: user.dataValues.username,
  }; 

  const token = jwt.sign(payload, jwtConfig.secret, { expiresIn: jwtConfig.expiresInMinutes });

  return { status: 'OK', data: { token } };
};

export default {
  createSession,
};