import { NextFunction, Request, Response } from 'express';

import Validation from './inputValues';
import mapStatusHTTP from '../utils/mapStatusHTTP';

const ensureCreateOrderValidation = (request:Request, response: Response, next: NextFunction)
: Response | void => {
  const { body: orderData } = request;

  const validationError = Validation.validationCreateOrder(orderData);

  if (validationError) {
    return response
      .status(mapStatusHTTP(validationError.statusHttp))
      .json({ message: validationError.message });
  }

  return next();
}; 

export default ensureCreateOrderValidation;