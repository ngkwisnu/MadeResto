export const remove_user_function =
  (userService, createResponse) => async (req, res) => {
    const removeUserData = await userService(req.params);
    return createResponse(removeUserData);
  };
