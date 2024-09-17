import { validateId, validateType } from "./validator.handler.js";

export const idValidator = (id, field) => {
  if (!id) throw new Error(`${field ?? "id"} must be filled`);
  if (!validateType(id, "string")) throw new Error("id must be string");
  if (!validateId(id)) throw new Error("id must be object");
  return {
    getId: () => id,
  };
};
