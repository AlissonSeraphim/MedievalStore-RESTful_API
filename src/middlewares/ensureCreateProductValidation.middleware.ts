import { NextFunction, Request, Response } from 'express';

import Validation from './inputValues';
import mapStatusHTTP from '../utils/mapStatusHTTP';

const ensureCreateProductValidation = (request:Request, response: Response, next: NextFunction)
: Response | void => {
  const { body: productData } = request;

  const validationError = Validation.validationCreateProduct(productData);

  if (validationError) {
    return response
      .status(mapStatusHTTP(validationError.statusHttp))
      .json({ message: validationError.message });
  }

  return next();
}; 

export default ensureCreateProductValidation;