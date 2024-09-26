export const get_user_detail_func =
  (userService, createResponse) => async (req, res) => {
    const userDetailData = await userService(req);
    return createResponse({ data: userDetailData });
  };
