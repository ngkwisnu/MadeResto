import { validateType } from "../../utils/validator.handler.js";
import ErrorHandler from "../../utils/error.handler.js";

const userDataValidation = async (req) => {
  const {
    body: { username, password, email, name, address, phone_number, is_active },
    params: { id },
  } = req;
  if (!username) throw new ErrorHandler("username must be filled!");
  if (!validateType(username, "string"))
    throw new ErrorHandler("username must be string");
  if (!password) throw new ErrorHandler("password must be filled!");
  if (!validateType(password, "string"))
    throw new ErrorHandler("password must be string");
  if (!email) throw new ErrorHandler("email must be filled!");
  if (!validateType(email, "string"))
    throw new ErrorHandler("email must be string");
  if (!name) throw new ErrorHandler("name must be filled!");
  if (!validateType(name, "string"))
    throw new ErrorHandler("name must be string");
  if (!address) throw new ErrorHandler("address must be filled!");
  if (!validateType(address, "string"))
    throw new ErrorHandler("address must be string");
  if (!phone_number) throw new ErrorHandler("phone_number must be filled!");
  if (!validateType(phone_number, "string"))
    throw new ErrorHandler("phone_number must be string");
  if (is_active === undefined)
    throw new ErrorHandler("is_active must be filled!");
  if (!validateType(is_active, "boolean"))
    throw new ErrorHandler("username must be boolean");
  const userDataValidation = {
    id,
    username,
    password,
    email,
    name,
    address,
    phone_number,
    is_active,
  };
  return {
    getDataUser: () => userDataValidation,
  };
};

export { userDataValidation };
