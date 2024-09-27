import User from "../../models/Users.model.js";

export const remove_user_repository = async ({ id }) => {
  console.log(id);
  const remove_user_by_id = await User.findOneAndUpdate(
    { _id: id },
    { deleted_at: new Date() }
  );
  return remove_user_by_id;
};
