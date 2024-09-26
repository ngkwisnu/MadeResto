export const get_user_list_function =
  (userService, createResponse) => async (req, res) => {
    const userListData = await userService();
    return createResponse(userListData);
  };
