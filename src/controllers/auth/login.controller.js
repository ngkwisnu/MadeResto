export const login_user_function =
  (
    validateLoginAccount,
    dbUserAccess,
    bcryptToken,
    createJWT,
    createResponse
  ) =>
  async (req, res) => {
    const validatedLoginData = await validateLoginAccount(req.body);
    const { username, password } = validatedLoginData.getDataLogin();
    const userDetail = await dbUserAccess.get_detail_user_repository(username);
    await bcryptToken.compare(password, userDetail.password);
    const access_token = await createJWT.access_key(userDetail);
    const refresh_token = await createJWT.refresh_key(userDetail);

    return createResponse(
      { access_token, refresh_token },
      "Login successfully!",
      200
    );
  };
