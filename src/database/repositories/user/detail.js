import User from "../../models/Users.model.js";
import ErrorHandler from "../../../utils/error.handler.js";

export const get_detail_user_repository = async (username) => {
  const userDetail = await User.findOne({ username })
    .orFail(new ErrorHandler("User not exist!"))
    .lean();
  return userDetail;
};
