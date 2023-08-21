import ProductModel from '../database/models/product.model';
import { ProductInputtableFields } from '../database/types/ProductInputabbleFields';
// import { ProductCreateDto } from '../dto/products.dto';
import { Product } from '../types/Product';
import ServiceResponse from '../types/ServiceResponse';

const createProduct = async ({ 
  name, 
  price, 
  orderId,
}: ProductInputtableFields): Promise<ServiceResponse<Product>> => {
  const newProduct = await ProductModel.create({ name, price, orderId });

  return { status: 'CREATED', data: newProduct.dataValues };
};

export const getProducts = async (): Promise<ServiceResponse<Product[]>> => {
  const allProducts = await ProductModel.findAll();

  const products = allProducts.map((product) => product.dataValues);

  return { status: 'OK', data: products };
};

export default {
  createProduct,
  getProducts,
};
