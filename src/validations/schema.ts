import Joi from 'joi';

const createSessionSchema = Joi.object({
  username: Joi.string().required().messages({
    'any.required': '"username" and "password" are required',
  }),
  password: Joi.string().required().messages({
    'any.required': '"username" and "password" are required',
  }),
});

const createProductSchema = Joi.object({
  name: Joi.string().min(3).required(),
  price: Joi.string().min(3).required(),
  orderId: Joi.number(),
});

const createOrderSchema = Joi.object({
  userId: Joi.number().integer().required(),
  productIds: Joi.array().items(Joi.number().required()).required().messages({
    'number.base': '"productIds" must be includes only numbers',
    'array.includesRequiredUnknowns': '"productIds" must include only numbers',
  }),
});

export default {
  createSessionSchema,
  createProductSchema,
  createOrderSchema,
};