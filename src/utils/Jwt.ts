import jwt from 'jsonwebtoken';
import { TokenPayload } from '../types/TokenPayload';
import jwtConfig from '../configs/auth';

const sing = (payload: TokenPayload)
: string => jwt.sign(payload, jwtConfig.secret, { expiresIn: jwtConfig.expiresInMinutes });

const verify = (token: string)
: TokenPayload | Error => jwt.verify(token, jwtConfig.secret) as TokenPayload;

export default {
  sing,
  verify,
};