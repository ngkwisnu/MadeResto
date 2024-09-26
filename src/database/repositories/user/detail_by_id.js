import User from "../../models/Users.model.js";

export const user_detail_by_id_repository = async (id) => {
  const userDetail = await User.findOne({ _id: id });
  return userDetail;
};
