import User from "../../models/Users.model.js";

export const user_detail_by_email_repository = async (email) => {
  const userDetail = await User.findOne({ email: email });
  return userDetail;
};
