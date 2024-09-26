import { validateLoginAccount } from "../../validations/auth/login.validation.js";
import { makeUserDb } from "../../database/repositories/user/index.js";
import { comparePassword } from "../../utils/bcrypt.handler.js";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../../utils/jwt.handler.js";
import ErrorHandler from "../../utils/error.handler.js";

const login_service_function = async (req) => {
  const { username, password } = (
    await validateLoginAccount(req.body)
  ).getDataLogin();

  const userDetail = await makeUserDb().user_detail_by_username_repository(
    username
  );

  if (!userDetail) {
    throw new ErrorHandler(
      "This account is not registered. Please sign up or try with a different account."
    );
  }

  const isMatch = await comparePassword(password, userDetail.password);

  if (!isMatch) {
    throw new ErrorHandler("invalid username and password!");
  }

  const userDataPayload = {
    username: userDetail.username,
    email: userDetail.email,
    id: userDetail._id,
  };

  return {
    accessToken: await generateAccessToken(userDataPayload),
    refreshToken: await generateRefreshToken(userDataPayload),
  };
};

export { login_service_function };
