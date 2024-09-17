import express from "express";
import handleCallback from "../utils/callback.handler.js";
import { list_user } from "../controllers/user/index.js";

const router = express.Router();

router.get("/", handleCallback(list_user));

export default router;
