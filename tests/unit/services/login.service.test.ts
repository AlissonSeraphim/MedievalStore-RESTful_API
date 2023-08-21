import { expect } from 'chai';
import sinon from 'sinon';

import UserModel from "../../../src/database/models/user.model"
import UserMock from "../../mocks/User.mock"
import LoginService from "../../../src/services/loginService"

describe('LoginService', function () {
  beforeEach(function () { sinon.restore(); });

  it("Consegue criar uma sessão com os dados corretos", async function () {
    const fakeUser = UserModel.build(UserMock.fakeUser);
    sinon.stub(UserModel, "findOne").resolves(fakeUser);

    const { status, data } = await LoginService.createSession({
      username: fakeUser.dataValues.username,
      password: UserMock.FAKE_PASSWORD
    })

    expect(status).to.be.equal("OK");
    expect(data).to.haveOwnProperty("token")
  })
  it("Não consegue criar uma sessão com dados incorretos", async function () {
    const fakeUser = UserModel.build(UserMock.fakeUser);
    sinon.stub(UserModel, "findOne").resolves(fakeUser);

    const { status, data } = await LoginService.createSession({
      username: fakeUser.dataValues.username,
      password: "incorrect_password"
    })

    expect(status).to.be.equal("UNAUTHORIZED");
    expect(data).to.haveOwnProperty("message")
  })
});