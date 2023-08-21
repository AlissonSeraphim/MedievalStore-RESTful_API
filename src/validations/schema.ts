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

export default {
  createSessionSchema,
  createProductSchema,
};