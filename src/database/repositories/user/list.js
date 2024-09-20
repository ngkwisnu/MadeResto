import User from "../../models/Users.model";

export const get_list_user_repository = async () => {
  const userDataList = await User.find();
  return userDataList;
};
