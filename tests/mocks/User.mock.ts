import bcrypt from "bcryptjs"

import bcryptConfig from "../../src/configs/hash"

const FAKE_PASSWORD = "password"

const fakeUser = {
  id: 1,
  username: "username",
  vocation: "vocation",
  level: 1,
  password: bcrypt.hashSync(FAKE_PASSWORD, bcryptConfig.alg)
}

export default {
  fakeUser,
  FAKE_PASSWORD
}