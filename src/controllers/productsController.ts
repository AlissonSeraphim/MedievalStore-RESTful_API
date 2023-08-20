import { Request, Response } from 'express';

import mapStatusHTTP from '../utils/mapStatusHTTP';
import services from '../services/index';

export const createProduct = async (req: Request, res: Response): Promise<Response> => {
  const { name, price, orderId } = req.body;

  const { status, data } = await services.productsService.createProduct({ name, price, orderId });

  return res.status(mapStatusHTTP(status)).json(data);
};

export default {
  createProduct,
};