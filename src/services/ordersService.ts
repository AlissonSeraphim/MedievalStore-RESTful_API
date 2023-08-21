import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import { Order } from '../types/Order';
import ServiceResponse from '../types/ServiceResponse';

const getOrders = async (): Promise<ServiceResponse<Order[]>> => {
  const ordersSequelize = await OrderModel.findAll({
    include: { model: ProductModel, as: 'products' },
  });

  const orders = ordersSequelize.map((orderSequelize) => {
    const order = orderSequelize.dataValues;

    order.productIds = order.products?.map((product) => product.dataValues.id);

    delete order.products;

    return order;
  });

  return { status: 'OK', data: orders };
};

export default {
  getOrders,
};