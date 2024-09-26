import User from "../../models/Users.model.js";

export const register_user_repository = async ({
  username,
  password,
  email,
  isActive,
}) => {
  const user = await User.create({
    username: username,
    password: password,
    email: email,
    is_active: isActive,
  });
  return user;
};
