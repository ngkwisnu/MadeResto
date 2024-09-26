import { validateRegisterAccount } from "../../validations/auth/register.validation.js";
import { makeUserDb } from "../../database/repositories/user/index.js";
import ErrorHandler from "../../utils/error.handler.js";
import { hashPassword } from "../../utils/bcrypt.handler.js";

const register_service_function = async (req) => {
  let { username, password, email } = (
    await validateRegisterAccount(req.body)
  ).getDataRegister();

  const isUserRegistered = await makeUserDb().user_detail_by_email_repository(
    email
  );

  if (isUserRegistered)
    throw new ErrorHandler(
      "This email is already in use. Please use a different email."
    );

  const registerDataUser = await makeUserDb().register_user_repository({
    username,
    password: hashPassword(password),
    email,
    isActive: true,
  });

  return registerDataUser;
};

export { register_service_function };
