import { makeUserDb } from "../../database/repositories/user/index.js";
import { register_user_function } from "./register.controller.js";
import { login_user_function } from "./login.controller.js";
import {
  validateLoginAccount,
  validateRegisterAccount,
} from "../../validations/user.validator.js";
import { compare, hash } from "../../utils/bcrypt.handler.js";
import { access_key, refresh_key } from "../../utils/jwt.handler.js";
import { createResponse } from "../../utils/response.handler.js";

const dbUserAccess = makeUserDb();
const createJWT = { access_key, refresh_key };
const bcryptToken = { compare, hash };

const register = register_user_function(
  dbUserAccess,
  bcryptToken,
  validateRegisterAccount,
  createResponse
);

const login = login_user_function(
  validateLoginAccount,
  dbUserAccess,
  bcryptToken,
  createJWT,
  createResponse
);

export { register, login };
