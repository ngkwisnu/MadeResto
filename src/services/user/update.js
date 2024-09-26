import { makeUserDb } from "../../database/repositories/user/index.js";
import ErrorHandler from "../../utils/error.handler.js";
import { userDataValidation } from "../../validations/user/user.validation.js";

const update_user_sevices_func = async (req) => {
  const validateUserData = (await userDataValidation(req)).getDataUser();
  const userUpdated = await makeUserDb().update_user_repository(
    validateUserData.id,
    validateUserData
  );
  return userUpdated;
};

export default update_user_sevices_func;
