import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response, NextFunction } from 'express';

import ensureCreateLoginValidation from "../../src/middlewares/ensureCreateLoginValidation"

chai.use(sinonChai);

describe('Create Login Validation Middleware', function () {
  const req = {} as Request;
  const res = {} as Response;
  const next: NextFunction = () => {};

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it("Não é possivel criar login sem username", async function () {
    req.body = {
      password: "fakePassword"
    }

    ensureCreateLoginValidation(req, res, next);

    expect(res.status).to.have.been.calledWith(400)
  })
});