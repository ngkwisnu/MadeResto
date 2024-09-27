import mongoose from "mongoose";
import handdleError from "../plugin/handdleError.js";
import timestamps from "../plugin/timestamps.js";
import softDelete from "../plugin/softDelete.js";

const productSchema = new mongoose.Schema({
  product_name: {
    type: String,
    required: true,
    unique: true,
  },
  product_description: {
    type: String,
    required: true,
  },
  product_qty: {
    type: Number,
    required: true,
  },
  product_price: {
    type: Number,
    required: true,
  },
  is_active: {
    type: Boolean,
    default: true,
  },
  deleted_at: {
    type: Date,
    default: null,
  },
});

productSchema.plugin(timestamps);
productSchema.plugin(softDelete);
productSchema.plugin(handdleError);

const Product = mongoose.model("master_products", productSchema);

export default Product;
