import { compare, hash } from "./bcrypt.handler.js";
import handleCallback from "./callback.handler.js";
import ErrorHandler from "./error.handler.js";
import { access_key, refresh_key, verify } from "./jwt.handler.js";
import { createResponse, errorResponse } from "./response.handler.js";
import {
  validateType,
  validateEmail,
  validateId,
  validateArray,
} from "./validator.handler.js";

export function utilFunc() {
  return Object.freeze({
    compare,
    hash,
    handleCallback,
    ErrorHandler,
    access_key,
    refresh_key,
    verify,
    createResponse,
    validateType,
    validateEmail,
    validateId,
    validateArray,
  });
}
