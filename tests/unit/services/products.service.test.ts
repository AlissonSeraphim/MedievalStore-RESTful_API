import { expect } from 'chai';
import sinon from 'sinon';

import ProductService from '../../../src/services/productsService'
import { productRegistered, productToRegister, responseService } from '../../mocks/produtsMock';
import ProductModel from '../../../src/database/models/product.model';

describe('ProductsService', function () {
  beforeEach(function () { sinon.restore(); });

  it ('Registra o produto com sucesso', async function () {
    const product = ProductModel.build(productRegistered);
    sinon.stub(ProductModel, 'create').resolves(product);
    // Act
    const productResponse = await ProductService.createProduct(productToRegister);
    // Assert
    expect(productResponse).to.be.deep.equal(responseService)
  })
  
});
