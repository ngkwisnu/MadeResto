import { makeUserDb } from "../../database/repositories/user/index.js";
import { hashPassword } from "../../utils/bcrypt.handler.js";
import ErrorHandler from "../../utils/error.handler.js";
import userDataValidation from "../../validations/user.validation.js";

const create_user_service_func = async (req) => {
  const validateDataUser = (await userDataValidation(req)).getDataUser();
  validateDataUser.password = hashPassword(validateDataUser.password);
  const createDataUser = await makeUserDb().create_user_repository(
    validateDataUser
  );
  if (!createDataUser) throw new ErrorHandler("Failed when create user data!");
  return createDataUser;
};

export default create_user_service_func;
