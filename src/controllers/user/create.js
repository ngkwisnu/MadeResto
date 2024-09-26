export const create_user_function =
  (userService, createResponse) => async (req, res) => {
    const userDataCreated = await userService(req);
    return createResponse(userDataCreated);
  };
