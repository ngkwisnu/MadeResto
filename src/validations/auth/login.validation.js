import ErrorHandler from "../../utils/error.handler.js";
import { validateType } from "../../utils/validator.handler.js";

const validateLoginAccount = async ({ username, password }) => {
  if (!username) throw new ErrorHandler("username must be filled");
  if (!validateType(username, "string"))
    throw new ErrorHandler("password must be string!");
  if (!password) throw new ErrorHandler("password must be filled");
  if (!validateType(password, "string"))
    throw new ErrorHandler("password must be string!");
  const user = {
    username,
    password,
  };
  return {
    getDataLogin: () => user,
  };
};

export { validateLoginAccount };
