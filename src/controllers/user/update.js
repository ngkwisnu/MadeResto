export const update_user_function =
  (userService, createResponse) => async (req, res) => {
    const updateUser = await userService(req);
    return createResponse(updateUser);
  };
