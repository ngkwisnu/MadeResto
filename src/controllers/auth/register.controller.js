export const register_user_function =
  (createResponse, authService) => async (req, res) => {
    const registerNewUser = await authService.register_service_function(req);
    return createResponse(registerNewUser, "Register success!", 200);
  };
