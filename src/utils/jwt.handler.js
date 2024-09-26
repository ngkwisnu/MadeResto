import jwt from "jsonwebtoken";
import ErrorHandler from "./error.handler.js";

const generateAccessToken = async (payload) => {
  return jwt.sign(payload, process.env.ACCESS_KEY_SECRET, { expiresIn: "60s" });
};

const generateRefreshToken = async (payload) => {
  return jwt.sign(payload, process.env.REFRESH_KEY_SECRET, { expiresIn: "1d" });
};

const verifyToken = async (token, secret) => {
  return jwt.verify(token, secret);
};

// const verifyToken = async (token, secret) => {
//   try {
//     return jwt.verify(token, secret);
//   } catch (error) {
//     if (error instanceof jwt.TokenExpiredError) {
//       throw new ErrorHandler("jwt expired", 403);
//     }
//     if (error instanceof jwt.JsonWebTokenError) {
//       throw new ErrorHandler("invalid token", 401);
//     }
//     throw error;
//   }
// };

export { generateAccessToken, generateRefreshToken, verifyToken };
