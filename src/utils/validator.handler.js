import { isValidObjectId } from "mongoose";
import { validate } from "email-validator";

// Bisa diganti dengan package Joi

const validateType = async (field, type) => {
  if (type === "boolean") {
    try {
      return typeof json.parse(field) === "boolean";
    } catch (error) {
      return false;
    }
  }
  return typeof field === type && (field !== null || type !== "object");
};

const validateEmail = async (email) => {
  return validate(email);
};

const validateId = async (id) => {
  return isValidObjectId(id);
};

const validateArray = async (array) => {
  return Array.isArray(array);
};

export { validateType, validateEmail, validateId, validateArray };
