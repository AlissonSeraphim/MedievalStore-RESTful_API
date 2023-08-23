import { Request, Response } from 'express';
import ordersService from '../services/ordersService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

const getOrders = async (_req: Request, res: Response): Promise<Response> => {
  const { data, status } = await ordersService.getOrders();

  return res.status(mapStatusHTTP(status)).json(data);
};

const createOrder = async (req: Request, res: Response): Promise<Response> => {
  const { productIds, userId } = req.body;

  const { data, status } = await ordersService.createOrder({ productIds, userId });

  return res.status(mapStatusHTTP(status)).json(data);
};

export default {
  getOrders,
  createOrder,
};