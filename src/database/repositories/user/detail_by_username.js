import User from "../../models/Users.model.js";

export const user_detail_by_username_repository = async (username) => {
  const userDetail = await User.findOne({ username: username });
  return userDetail;
};
