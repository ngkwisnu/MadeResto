import handleCallback from "../utils/callback.handler.js";
import { product_controller } from "../controllers/products/index.js";
import express from "express";

const {
  create_product,
  list_product,
  update_product,
  remove_product,
  detail_product,
} = product_controller;
const router = express.Router();

router.get("/", handleCallback(list_product));
router.post("/", handleCallback(create_product));
router.get("/:id", handleCallback(detail_product));
router.put("/:id", handleCallback(update_product));
router.delete("/:id", handleCallback(remove_product));

export default router;
