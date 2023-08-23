import OrderModel from '../database/models/order.model';
import ProductModel from '../database/models/product.model';
import UserModel from '../database/models/user.model';
import { OrderWithProductIds } from '../types/Order';
import ServiceResponse from '../types/ServiceResponse';
import orderWithProductIds from '../database/types/OrderMap';
import { CreateOrderRequest } from '../types/CreateOrderRequest';

const getOrders = async (): Promise<ServiceResponse<OrderWithProductIds[]>> => {
  const ordersFromDB = await OrderModel.findAll({
    include: { model: ProductModel, as: 'products' },
  });

  const orders = ordersFromDB.map((
    orderFromDB,
  ) => orderWithProductIds.orderWithProductIds(orderFromDB));
  
  return { status: 'OK', data: orders };
};

async function verifyIfExistProducts(productIds: number[]): Promise<boolean> {
  let productsExists = true;

  await Promise.all(productIds.map(async (producId) => {
    const product = await ProductModel.findOne({ where: { id: producId } });

    if (!product) {
      productsExists = false;
    }
  }));

  return productsExists;
}

const createOrder = async ({ productIds, userId }: CreateOrderRequest)
: Promise<ServiceResponse<OrderWithProductIds>> => {
  const user = await UserModel.findOne({ where: { id: userId } });

  if (!user) {
    return { status: 'NOT_FOUND', data: { message: '"userId" not found' } };
  }
  
  const productsExists = await verifyIfExistProducts(productIds);

  if (!productsExists) {
    return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
  }

  const order = await OrderModel.create({ userId });

  await Promise.all(productIds.map((productId) => ProductModel
    .update({ orderId: order.dataValues.id }, { where: { id: productId } })));

  const orderWithProductIdsData: OrderWithProductIds = {
    id: order.dataValues.id,
    userId: order.dataValues.userId,
    productIds, 
  };

  return { status: 'CREATED', data: orderWithProductIdsData };
};

export default {
  getOrders,
  createOrder,
};