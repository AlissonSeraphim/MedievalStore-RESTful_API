import { Model } from 'sequelize';
import { Product, ProductCreateFields } from '../../types/Product';

export type ProductSequelizeModel = Model<Product, ProductCreateFields>;