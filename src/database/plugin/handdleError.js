import ErrorHandler from "../../utils/error.handler.js";

const handdleError = (schema) => {
  schema.post("save", function (err, doc, next) {
    if (err.code === 11000) {
      if (err.keyValue.username) {
        throw new ErrorHandler(
          "Username is already taken. Please choose a different one.",
          400
        );
      }
      if (err.keyValue.email) {
        throw new ErrorHandler("Email is available for registration.", 400);
      }
    }
    next();
  });
};

export default handdleError;
