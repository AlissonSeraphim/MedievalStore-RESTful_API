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

// export const getProducts = async (): Promise<ProductCreateDto[]> => {
//   const allProducts = await ProductModel.findAll();

//   return allProducts;
// };

export default {
  createProduct,
};
