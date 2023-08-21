import sinonChai from 'sinon-chai';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import { Request, Response } from 'express';

import orderService from '../../../src/services/ordersService';
import orderController from '../../../src/controllers/ordersController'
import OrderMock from '../../mocks/Order.mock';
import { getProducts } from '../../mocks/produtsMock';
import { Order } from "../../../src/types/Order"

chai.use(sinonChai);

describe('OrdersController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it("Lista todas as orders", async function () {
    const fakeProducts = getProducts
    const fakeOrders = OrderMock.fakeOrders as Order[];

    fakeOrders[0].productIds = fakeProducts.map(fakeProduct => fakeProduct.id)

    const fakeOrdersWithProducts = fakeOrders

    sinon.stub(orderService, "getOrders").resolves({
      status: "OK",
      data: fakeOrdersWithProducts
    })

    await orderController.getOrders(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(fakeOrdersWithProducts)
  })
});