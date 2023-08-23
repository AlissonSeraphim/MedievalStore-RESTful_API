import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import jwtConfig from '../configs/auth';
import UserModel from '../database/models/user.model';
import { TokenPayload } from '../types/TokenPayload';

const ensureAuthentication = (request: Request, response: Response, next: NextFunction)
: Response | void => {
  try {
    const authHeader = request.header('authorization');

    if (!authHeader) {
      return response.status(401).json({ message: 'Token not found' });
    }

    const [, token] = authHeader.split(' ');

    const { username } = jwt.verify(token, jwtConfig.secret) as TokenPayload;

    const user = UserModel.findOne({ where: { username } });

    if (!user) {
      throw new Error();
    }

    next();
  } catch {
    return response.status(401).json({ message: 'Invalid token' });
  }
};

export default ensureAuthentication;