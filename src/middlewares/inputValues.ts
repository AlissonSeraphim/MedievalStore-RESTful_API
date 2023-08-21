import { CreateSession } from '../types/CreateSession';
import Schemas from '../validations/schema';
import { ValidationError } from '../types/ValidationError';
import { ProductInputtableFields } from '../database/types/ProductInputabbleFields';

const validationCreateSession = (loginData: CreateSession)
: ValidationError | undefined => {
  const { error } = Schemas.createSessionSchema.validate(loginData);

  return error ? { message: error.message, statusHttp: 'INVALID_DATA' } : undefined;
};

const validationCreateProduct = (productData: ProductInputtableFields)
: ValidationError | undefined => {
  const { error } = Schemas.createProductSchema.validate(productData);

  if (error) {
    const statusHttp = error.details[0].type.includes('required')
      ? 'INVALID_DATA' : 'UNPROCESSABLE_ENTITY';

    return { message: error.message, statusHttp };
  }

  return undefined;
};

export default {
  validationCreateSession,
  validationCreateProduct,
};