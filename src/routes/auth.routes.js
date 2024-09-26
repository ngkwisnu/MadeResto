import express from "express";
import { register, login } from "../controllers/auth/index.js";
import handleCallback from "../utils/callback.handler.js";
const router = express.Router();

router.post("/register", handleCallback(register));
router.post("/login", handleCallback(login));

export default router;
