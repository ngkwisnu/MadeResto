import { utilFunc } from "../../utils/index.js";
import { makeUserDb } from "../../database/repositories/user/index.js";
import { register_user_function } from "./register.controller.js";
import { login_user_function } from "./login.controller.js";

const Function = utilFunc();
const dbUserAccess = makeUserDb();

const register = register_user_function(dbUserAccess, Function);
const login = login_user_function(dbUserAccess, Function);

export { register, login };
