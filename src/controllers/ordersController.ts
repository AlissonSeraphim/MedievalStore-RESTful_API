import { Request, Response } from 'express';
import ordersService from '../services/ordersService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

const getOrders = async (_req: Request, res: Response): Promise<Response> => {
  const { data, status } = await ordersService.getOrders();

  return res.status(mapStatusHTTP(status)).json(data);
};

export default {
  getOrders,
};