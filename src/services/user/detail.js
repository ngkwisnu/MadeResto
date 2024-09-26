import { makeUserDb } from "../../database/repositories/user/index.js";
import ErrorHandler from "../../utils/error.handler.js";
import { validateId } from "../../utils/validator.handler.js";

const detail_user_service_func = async (req) => {
  const {
    params: { id },
  } = req;
  if (!id) {
    throw new ErrorHandler("Must provide id user!");
  }
  const userDetailData = await makeUserDb().user_detail_by_id_repository(
    await validateId(id)
  );
  if (!userDetailData) {
    throw new ErrorHandler("User not found!");
  }
  return userDetailData;
};

export default detail_user_service_func;
