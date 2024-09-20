export const register_user_function =
  (dbUserAccess, bcryptToken, validateRegisterAccount, createResponse) =>
  async (req, res) => {
    const userDataValidate = await validateRegisterAccount(req.body);
    const userDataRegister = userDataValidate.getData();
    userDataRegister.password = await bcryptToken.hash(
      userDataRegister.password
    );
    const result = await dbUserAccess.create_user_repository(userDataRegister);
    return createResponse(result, "Register success!", 200);
  };
