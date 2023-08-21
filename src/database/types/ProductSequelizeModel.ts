import { Model } from 'sequelize';
import { Product } from '../../types/Product';
import { ProductInputtableFields } from './ProductInputabbleFields';

export type ProductSequelizeModel = Model<Product, ProductInputtableFields>;