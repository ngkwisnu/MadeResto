import { makeUserDb } from "../../database/repositories/user/index.js";
import ErrorHandler from "../../utils/error.handler.js";
import { userDataValidation } from "../../validations/user/user.validation.js";

const create_user_service_func = async (req) => {
  const validateDataUser = (await userDataValidation(req)).getDataUser();
  const createDataUser = await makeUserDb().create_user_repository(
    validateDataUser
  );
  if (!createDataUser) throw new ErrorHandler("Failed when create user data!");
  return createDataUser;
};

export default create_user_service_func;
