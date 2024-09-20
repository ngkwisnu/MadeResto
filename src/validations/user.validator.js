import ErrorHandler from "../utils/error.handler.js";
import { validateEmail, validateType } from "../utils/validator.handler.js";

const validateRegisterAccount = async ({
  username,
  password,
  email,
  isActive = true,
}) => {
  if (!username) throw new ErrorHandler("username must be filled!");
  if (!validateType(username, "string"))
    throw new ErrorHandler("username must be string!");
  if (!password) throw new ErrorHandler("password must be filled!");
  if (!validateType(password, "string"))
    throw new ErrorHandler("password must be string!");
  if (!email) throw new ErrorHandler("email must be filled!");
  if (!(await validateEmail(email)))
    throw new ErrorHandler("email not valid format");
  if (isActive === undefined)
    throw new ErrorHandler("is active must be filled");
  if (!validateType(isActive, "boolean"))
    throw new ErrorHandler("isActive must be boolean");
  const user = {
    username,
    password,
    email,
    isActive,
  };
  return {
    getData: () => user,
  };
};

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

export { validateRegisterAccount, validateLoginAccount };
