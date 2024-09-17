export const get_user_function =
  (Model, ErrorHandler, createResponse) => async (req, res) => {
    const user_list = await Model.find({});
    if (!user_list) {
      throw new ErrorHandler("Something wrong!");
    }

    return createResponse(user_list);
  };
