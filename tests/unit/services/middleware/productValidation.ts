import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response, NextFunction } from 'express';

import ensureProductValidation from '../../../../src/middlewares/productValidation'

chai.use(sinonChai);

describe('Product Validation Middleware', function () {
  const req = {} as Request;
  const res = {} as Response;
  const next: NextFunction = () => {};

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it("should not be able to create a product without pass a name", async function () {
    req.body = {
      price: "100",
      orderId: 3
    }

    ensureProductValidation(req, res, next);

    expect(res.status).to.have.been.calledWith(400)
  })
});