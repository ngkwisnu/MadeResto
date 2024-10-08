import { makeUserDb } from "../../database/repositories/user/index.js";
import ErrorHandler from "../../utils/error.handler.js";

const user_list_service_func = async (query) => {
  const userListData = await makeUserDb().get_list_user_repository(query);
  if (!userListData) {
    throw new ErrorHandler("Error when find data user!");
  }
  return userListData;
};

export default user_list_service_func;
