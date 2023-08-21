import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';

import LoginService from '../../../src/services/loginService';
import LoginController from '../../../src/controllers/loginController';

chai.use(sinonChai);

describe('LoginController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it("Cria uma sessão com o dados corretos", async function () {
    const fakeToken = "fakeToken"
    sinon.stub(LoginService, "createSession").resolves({
      status: "OK",
      data: {
        token: fakeToken
      }
    })

    req.body = {
      username: "fakeUsername",
      password: "fakePassword"
    }

    await LoginController.createSession(req, res)

    expect(res.status).to.have.been.calledWith(200)
    expect(res.json).to.have.been.calledWithMatch({
      token: fakeToken
    })
  })

});
