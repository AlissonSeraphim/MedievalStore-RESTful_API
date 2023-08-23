import { DataTypes, ModelDefined } from 'sequelize';
import db from './index';
import { OrderCreateFields } from '../../types/Order';
import { OrderSequelizeModel, OrderWithRelations } from '../types/OrderSequelize';

type OrderSequelizeModelCreator = ModelDefined<OrderWithRelations, OrderCreateFields>;
export { OrderSequelizeModel };

const OrderModel: OrderSequelizeModelCreator = db.define('Order', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'orders',
  timestamps: false,
  underscored: true,
});

// OrderModel.belongsTo(UserModel, { foreignKey: 'userId' });
// OrderModel.hasMany(ProductModel, { foreignKey: 'orderId', as: 'products' });

// const loadRelations = (): void => {
//   OrderModel.belongsTo(UserModel, { foreignKey: 'userId' });
//   OrderModel.hasMany(ProductModel, { foreignKey: 'orderId', as: 'products' });
// };

// if (process.env.NODE_ENV !== 'test') loadRelations();

export default OrderModel;
