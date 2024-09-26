import User from "../../models/Users.model.js";

export const remove_user_repository = async ({ id }) => {
  const remove_user_by_id = await User.findOneAndUpdate(
    { id },
    { is_deleted: new Date() }
  );
  return remove_user_by_id;
};
