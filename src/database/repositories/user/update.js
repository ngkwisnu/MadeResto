import User from "../../models/Users.model.js";

export const update_user_repository = async (id, data) => {
  const update_user_by_id = await User.findOneAndUpdate({ _id: id }, data, {
    new: true,
  });
  return update_user_by_id;
};
