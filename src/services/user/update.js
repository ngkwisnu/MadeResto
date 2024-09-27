import { makeUserDb } from "../../database/repositories/user/index.js";
import { hashPassword } from "../../utils/bcrypt.handler.js";
import ErrorHandler from "../../utils/error.handler.js";
import userDataValidation from "../../validations/user.validation.js";

const update_user_sevices_func = async (req) => {
  const { getDataUser } = await userDataValidation(req);
  const validateUserData = getDataUser();
  const { id, email, password } = validateUserData;
  const User = makeUserDb();

  validateUserData.password = hashPassword(password);

  const isEmailExist = await User.user_detail_by_email_repository(email);
  if (isEmailExist) throw new ErrorHandler("Email already registered!");

  const userUpdated = await User.update_user_repository(id, validateUserData);
  if (userUpdated === null)
    throw new ErrorHandler(
      "Failed to update data! please make sure your id is validate"
    );

  return userUpdated;
};

export default update_user_sevices_func;
