import { validateLoginAccount } from "../../validations/user.validator.js";

export const login_user_function = (User, Function) => async (req, res) => {
  const validatedLoginData = await validateLoginAccount(req.body);
  const { username } = validatedLoginData.getDataLogin();
  const userDetail = await User.get_detail_user_repository(username);
  const access_token = await Function.access_key(userDetail);
  const refresh_token = await Function.refresh_key(userDetail);

  return Function.createResponse(
    { access_token, refresh_token },
    "Login successfully!",
    200
  );
};
