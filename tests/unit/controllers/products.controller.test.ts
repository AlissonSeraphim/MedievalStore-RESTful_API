import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';

chai.use(sinonChai);

import productController from '../../../src/controllers/productsController'
import { productRegistered, productToRegister, responseService } from '../../mocks/produtsMock';
import productsService from '../../../src/services/productsService';

describe('ProductsController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it ('Registra o produto com sucesso', async function () {
    // Arrange
    req.body = productToRegister;
    sinon.stub(productsService, 'createProduct').resolves({
      status: 'CREATED', data: productRegistered
    });
    // Act
    await productController.createProduct(req, res);
    // Assert
    expect(res.status).to.have.been.calledWith(201);
  })

});
