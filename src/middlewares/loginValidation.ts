import { NextFunction, Request, Response } from 'express';

import Validation from './inputValues';
import mapStatusHTTP from '../utils/mapStatusHTTP';

const ensureLoginValidation = (request:Request, response: Response, next: NextFunction)
: Response | void => {
  const { body: loginData } = request;

  const validationError = Validation.validationCreateSession(loginData);

  if (validationError) {
    return response
      .status(mapStatusHTTP(validationError.statusHttp))
      .json({ message: validationError.message });
  }

  return next();
}; 

export default ensureLoginValidation;