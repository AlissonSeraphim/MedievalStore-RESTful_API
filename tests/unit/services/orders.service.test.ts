import { expect } from 'chai';
import sinon from 'sinon';

import OrderModel from '../../../src/database/models/order.model';
import OrderMock from '../../mocks/Order.mock';
import ProductModel from '../../../src/database/models/product.model';
import ordersService from '../../../src/services/ordersService';
import { getProducts } from '../../mocks/produtsMock';

describe('OrdersService', function () {
  beforeEach(function () { sinon.restore(); });

  it("Lista todas as orders", async function () {
    const fakeProducts = ProductModel.bulkBuild(getProducts)
    const fakeOrders = OrderModel.bulkBuild(OrderMock.fakeOrders)
    fakeOrders[0].dataValues.products = fakeProducts
    const fakeOrdersWithProductRelation = fakeOrders

    sinon.stub(OrderModel, "findAll").resolves(fakeOrdersWithProductRelation)

    const { data, status } = await ordersService.getOrders();

    expect(status).to.be.equal("OK")
    expect(data).to.be.instanceOf(Array)
  })
});