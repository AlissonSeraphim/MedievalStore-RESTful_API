import { DataTypes, Model, ModelDefined, Optional } from 'sequelize';
import db from './index';
import { Order } from '../../types/Order';
import { ProductSequelizeModel } from '../types/ProductSequelizeModel';

type OrderWithProductRelation = Order & { products?: ProductSequelizeModel[] };
type OrderInputtableTypes = Optional<OrderWithProductRelation, 'id'>;
type OrderSequelizeModelCreator = ModelDefined<OrderWithProductRelation, OrderInputtableTypes>;
export type OrderSequelizeModel = Model<OrderWithProductRelation, OrderInputtableTypes>;

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
