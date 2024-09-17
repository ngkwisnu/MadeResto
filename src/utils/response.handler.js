const defaultHeaders = { "Content-Type": "application/json" };

const createResponse = (data, message = "Success", statusCode = 200) => {
  return {
    headers: defaultHeaders,
    statusCode,
    body: { message, data },
  };
};

const errorResponse = ({
  res,
  data,
  message = "error not found",
  statusCode = 400,
}) => {
  return res.status(statusCode).json({
    error: "An unknown error occurred",
    message: data ?? message,
  });
};

export { createResponse, errorResponse };
