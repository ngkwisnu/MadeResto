import { makeUserDb } from "../../database/repositories/user/index.js";
import ErrorHandler from "../../utils/error.handler.js";
import { validateId } from "../../utils/validator.handler.js";

const remove_user_service_func = async ({ id }) => {
  if (!(await validateId(id))) throw new ErrorHandler("id isn't validate!");
  const removeUserData = await makeUserDb().remove_user_repository({ id });
  if (removeUserData === null)
    throw new ErrorHandler("Failed to remove user! please make sure your id");
  return removeUserData;
};

export default remove_user_service_func;
