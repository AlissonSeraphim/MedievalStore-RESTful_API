import { OrderWithProductIds } from '../../types/Order';
import { OrderSequelizeModel } from '../models/order.model';

const orderWithProductIds = ({
  dataValues: orderDataValues,
}: OrderSequelizeModel): OrderWithProductIds => ({
  id: orderDataValues.id,
  userId: orderDataValues.userId,
  productIds: orderDataValues.products?.map(({
    dataValues: productDataValues,
  }) => productDataValues.id) || [],
});

export default {
  orderWithProductIds,
};