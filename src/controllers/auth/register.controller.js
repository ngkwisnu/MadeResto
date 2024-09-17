import { validateRegisterAccount } from "../../validations/user.validator.js";

export const register_user_function = (User, Function) => async (req, res) => {
  const userDataValidate = await validateRegisterAccount(req.body);
  const result = await User.create_user_repository(userDataValidate.getData());
  return Function.createResponse(result, "Register success!", 200);
};
