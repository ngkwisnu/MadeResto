import { verifyToken } from "../utils/jwt.handler.js";
import { errorResponse } from "../utils/response.handler.js";

const protect = async (req, res, next) => {
  try {
    const bearerToken = req.headers["authorization"].split(" ")[1];
    const verifyAccessToken = await verifyToken(
      bearerToken,
      process.env.ACCESS_KEY_SECRET
    );
    req.user = verifyAccessToken;
    return next();
  } catch (error) {
    return errorResponse({
      res,
      message: error.message,
      statusCode: error.statusCode ?? 401,
    });
  }
};

export { protect };
