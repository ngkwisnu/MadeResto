import { register_user_function } from "./register.controller.js";
import { login_user_function } from "./login.controller.js";
import { createResponse } from "../../utils/response.handler.js";
import * as authService from "../../services/index.js";

const register = register_user_function(createResponse, authService);
const login = login_user_function(createResponse, authService);

export { register, login };
