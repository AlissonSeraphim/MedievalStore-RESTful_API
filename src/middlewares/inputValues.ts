import CreateSessionRequest from '../types/CreateSession';
import Schemas from '../validations/schema';
import { ValidationError } from '../types/ValidationError';
import { CreateOrderRequest } from '../types/CreateOrderRequest';
import { ProductCreateFields } from '../types/Product';

const validationCreateSession = (loginData: CreateSessionRequest)
: ValidationError | undefined => {
  const { error } = Schemas.createSessionSchema.validate(loginData);

  return error ? { message: error.message, statusHttp: 'INVALID_DATA' } : undefined;
};

const validationCreateProduct = (productData: ProductCreateFields)
: ValidationError | undefined => {
  const { error } = Schemas.createProductSchema.validate(productData);

  if (error) {
    const statusHttp = error.details[0].type.includes('required')
      ? 'INVALID_DATA' : 'UNPROCESSABLE_ENTITY';
    
    return { message: error.message, statusHttp };
  }

  return undefined;
};

const validationCreateOrder = (orderData: CreateOrderRequest)
: ValidationError | undefined => {
  const { error } = Schemas.createOrderSchema.validate(orderData, { convert: false });

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
  validationCreateOrder,
};