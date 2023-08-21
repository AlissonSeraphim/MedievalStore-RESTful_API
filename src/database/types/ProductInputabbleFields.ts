import { Optional } from 'sequelize';
import { Product } from '../../types/Product';

export type ProductInputtableFields = Optional<Product, 'id'>;