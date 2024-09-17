import ErrorHandler from "../../../utils/error.handler.js";
import User from "../../models/Users.model.js";

export const create_user_repository = async ({
  username,
  password,
  email,
  isActive,
}) => {
  const emailAlreadyExits = await User.findOne({ email });
  if (emailAlreadyExits) throw new ErrorHandler("Email already used!");
  const user = await User.create({
    username: username,
    password: password,
    email: email,
    is_active: isActive,
  });
  return user;
};
