import { Model } from 'sequelize';
import { Order, OrderCreateFields } from '../../types/Order';
import { ProductSequelizeModel } from './ProductSequelizeModel';

export type OrderWithRelations = Order & { products?: ProductSequelizeModel[] };
export type OrderSequelizeModel = Model<OrderWithRelations, OrderCreateFields>;