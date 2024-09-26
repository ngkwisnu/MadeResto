import express from "express";
import handleCallback from "../utils/callback.handler.js";
import { protect } from "../middlewares/verify_token.middleware.js";
import {
  list_user,
  detail_user,
  create_user,
  update_user,
} from "../controllers/user/index.js";

const router = express.Router();

router.get("/", protect, handleCallback(list_user));
router.post("/", protect, handleCallback(create_user));
router.get("/:id", protect, handleCallback(detail_user));
router.put("/:id", handleCallback(update_user));

export default router;
