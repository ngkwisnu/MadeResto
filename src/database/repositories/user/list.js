import pagination from "../../../utils/pagination.js";
import User from "../../models/Users.model.js";

export const get_list_user_repository = async (query) => {
  const userDataList = await pagination(User, query);
  return userDataList;
};
