import { expect } from 'chai';
import sinon from 'sinon';

import OrderModel from '../../../src/database/models/order.model';
import OrderMock from '../../mocks/Order.mock';
import ProductModel from '../../../src/database/models/product.model';
import ordersService from '../../../src/services/ordersService';
import UserMock from '../../mocks/User.mock';
import UserModel from '../../../src/database/models/user.model';
import { getProducts } from '../../mocks/produtsMock'

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


  it("Cria uma order associada a um product com sucesso", async function () {
    const fakeUser = UserModel.build(UserMock.fakeUser)
    const fakeProducts = ProductModel.bulkBuild(getProducts)
    const fakeOrder = OrderModel.build(OrderMock.fakeOrderWithoutId)
    fakeOrder.dataValues.products = fakeProducts
    const fakeOrderWithProductRelation = fakeOrder

    sinon.stub(ProductModel, "findOne").resolves(fakeProducts[0])
    sinon.stub(ProductModel, "update").resolves()
    sinon.stub(UserModel, "findOne").resolves(fakeUser)
    sinon.stub(OrderModel, "create").resolves(fakeOrderWithProductRelation)

    const { data, status } = await ordersService.createOrder({
      userId: fakeOrder.dataValues.userId,
      productIds: [fakeProducts[0].dataValues.id]
    })

    expect(status).to.be.equal("CREATED")
    expect(data).to.haveOwnProperty("productIds")
  })
  
  it("Falha em criar uma order associada a um product inexistente", async function () {
    const fakeUser = UserModel.build(UserMock.fakeUser)
    const fakeProducts = ProductModel.bulkBuild(getProducts)
    const fakeOrder = OrderModel.build(OrderMock.fakeOrderWithoutId)
    fakeOrder.dataValues.products = fakeProducts
    const fakeOrderWithProductRelation = fakeOrder

    sinon.stub(ProductModel, "findOne")
      .onFirstCall()
      .resolves(fakeProducts[0])
      .onSecondCall()
      .resolves(undefined)
    sinon.stub(ProductModel, "update").resolves()
    sinon.stub(UserModel, "findOne").resolves(fakeUser)
    sinon.stub(OrderModel, "create").resolves(fakeOrderWithProductRelation)

    const NON_EXISTENT_PRODUCT_ID = 3; 

    const { status } = await ordersService.createOrder({
      userId: fakeOrder.dataValues.userId,
      productIds: [fakeProducts[0].dataValues.id, NON_EXISTENT_PRODUCT_ID]
    })

    expect(status).to.be.equal("NOT_FOUND")
  })

  it("Não cria uma order com usuário inexistente", async function () {
    const fakeProducts = ProductModel.bulkBuild(getProducts)
    const fakeOrder = OrderModel.build(OrderMock.fakeOrderWithoutId)
    fakeOrder.dataValues.products = fakeProducts
    const fakeOrderWithProductRelation = fakeOrder

    sinon.stub(ProductModel, "findOne").onFirstCall().resolves(fakeProducts[0])
    sinon.stub(ProductModel, "update").resolves()
    sinon.stub(UserModel, "findOne").resolves(undefined)
    sinon.stub(OrderModel, "create").resolves(fakeOrderWithProductRelation)

    const NON_EXISTENT_USER_ID = 9999

    const { status } = await ordersService.createOrder({
      userId: NON_EXISTENT_USER_ID,
      productIds: [fakeProducts[0].dataValues.id]
    })

    expect(status).to.be.equal("NOT_FOUND")
  })
});