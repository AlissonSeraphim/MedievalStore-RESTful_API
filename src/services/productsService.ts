import ProductModel from '../database/models/product.model';
import { ProductCreateDto } from '../dto/products.dto';
import { Product } from '../types/Product';
import { ServiceResponseCreated } from '../types/ServiceResponse';

const createProduct = async ({ 
  name, 
  price, 
  orderId,
}: ProductCreateDto): Promise<ServiceResponseCreated<Product>> => {
  const newProduct = await ProductModel.create({ name, price, orderId });

  return { status: 'CREATED', data: newProduct.dataValues };
};

export const getProducts = async (): Promise<ServiceResponseCreated<Product[]>> => {
  const allProducts = await ProductModel.findAll();

  const products = allProducts.map((product) => product.dataValues);

  return { status: 'OK', data: products };
};

export default {
  createProduct,
  getProducts,
};
