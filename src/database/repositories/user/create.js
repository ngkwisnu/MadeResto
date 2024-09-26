import User from "../../models/Users.model.js";

const create_user_repository = async (data) => {
  const result = await User.create(data);
  return result;
};

export { create_user_repository };
