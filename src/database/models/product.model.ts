import { DataTypes, ModelDefined } from 'sequelize';
import db from './index';
import { Product, ProductCreateFields } from '../../types/Product';
import OrderModel from './order.model';
import UserModel from './user.model';

import { ProductSequelizeModel } from '../types/ProductSequelizeModel';

type ProductSequelizeModelCreator = ModelDefined<Product, ProductCreateFields>;
export { ProductSequelizeModel };

const ProductModel: ProductSequelizeModelCreator = db.define('Product', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  price: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  orderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'products',
  timestamps: false,
  underscored: true,
});

OrderModel.belongsTo(UserModel, { foreignKey: 'userId' });
OrderModel.hasMany(ProductModel, { foreignKey: 'orderId', as: 'products' });

export default ProductModel;
