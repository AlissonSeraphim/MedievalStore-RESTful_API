import sinonChai from 'sinon-chai';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import { Request, Response } from 'express';


import OrderMock from '../../mocks/Order.mock';
import { getProducts } from '../../mocks/produtsMock';
import { OrderWithProductIds } from "../../../src/types/Order"
import ordersService from '../../../src/services/ordersService';
import ordersController from '../../../src/controllers/ordersController';

chai.use(sinonChai);

describe('OrdersController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it("Cria uma order com sucesso", async function () {
    const { fakeOrderWithProductIds } = OrderMock;

    req.body = {
      userId: fakeOrderWithProductIds.userId,
      productIds: fakeOrderWithProductIds.productIds
    }

    sinon.stub(ordersService, "createOrder").resolves({
      data: fakeOrderWithProductIds,
      status: "CREATED"
    })

    const { data, status } = await ordersService.createOrder({
      userId: fakeOrderWithProductIds.userId,
      productIds: fakeOrderWithProductIds.productIds
    })

    await ordersController.createOrder(req,res);

    expect(status).to.be.equal("CREATED")
    expect(data).to.be.deep.equal(fakeOrderWithProductIds)
  })

  it("Lista todas as orders", async function () {
    const fakeProducts = getProducts;
    const fakeOrders = OrderMock.fakeOrders as OrderWithProductIds[];

    fakeOrders[0].productIds = fakeProducts.map(fakeProduct => fakeProduct.id)

    const fakeOrdersWithProducts = fakeOrders

    sinon.stub(ordersService, "getOrders").resolves({
      status: "OK",
      data: fakeOrdersWithProducts
    })

    await ordersController.getOrders(req,res)

    expect(res.status).to.have.been.calledWith(200)
    expect(res.json).to.have.been.calledWith(fakeOrdersWithProducts)
  })
});