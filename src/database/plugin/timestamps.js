import { getCurrentDate } from "../../utils/localtime.handler.js";

const timestamps = (schema) => {
  schema.pre("save", function (next) {
    (this.createdAt = getCurrentDate()), (this.updatedAt = getCurrentDate());
    next();
  });
};

export default timestamps;
