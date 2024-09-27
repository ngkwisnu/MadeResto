import authRoute from "./auth.routes.js";
import productRoute from "./products.routes.js";
import userRoute from "./users.routes.js";
import express from "express";

const router = express.Router();

router.use("/auth", authRoute);
router.use("/product", productRoute);
router.use("/user", userRoute);

export default router;
