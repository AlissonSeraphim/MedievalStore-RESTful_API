import { Request, Response } from 'express';
import LoginService from '../services/loginService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

const createSession = async (req: Request, res: Response): Promise<Response> => {
  const { username, password } = req.body;

  const { status, data } = await LoginService.createSession({ username, password });

  return res.status(mapStatusHTTP(status)).json(data);
};

export default {
  createSession,
};