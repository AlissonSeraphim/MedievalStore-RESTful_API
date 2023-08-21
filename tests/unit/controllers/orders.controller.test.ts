import sinonChai from 'sinon-chai';
import chai, { expect } from 'chai';
import sinon from 'sinon';
import { Request, Response } from 'express';

import orderService from '../../../src/services/ordersService';
import OrderMock from '../../mocks/Order.mock';
import { getProducts } from '../../mocks/produtsMock';
import { Order } from "../../../src/types/Order"

chai.use(sinonChai);

describe('OrdersController', function () {
    sinon.restore();

  it("should be able to list all orders with product relation", async function () {
    const fakeProducts = getProducts
    const fakeOrders = OrderMock.fakeOrders as Order[];

    fakeOrders[0].productIds = fakeProducts.map(fakeProduct => fakeProduct.id)

    const fakeOrdersWithProducts = fakeOrders

    sinon.stub(orderService, "getOrders").resolves({
      status: "OK",
      data: fakeOrdersWithProducts
    })

    const {data, status} = await orderService.getOrders()

    expect(status).to.be.equal("OK")
    expect(data[0]).to.haveOwnProperty("productIds")
  })
});