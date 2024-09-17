import User from "../../database/models/Users.model.js";
import { get_user_function } from "./list.js";
import { createResponse } from "../../utils/response.handler.js";
import ErrorHandler from "../../utils/error.handler.js";

const list_user = get_user_function(User, ErrorHandler, createResponse);

export { list_user };
