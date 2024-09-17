import mongoose from "mongoose";
import ErrorHandler from "../../utils/ErrorHandler";

const productSchema = new mongoose.Schema(
  {
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
    is_deleted: {
      type: Boolean,
      default: false,
    },
    deleted_at: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

productSchema.post("save", function (err, doc, next) {
  if (err.code === 11000) {
    if (err.keyValue.product_name) {
      throw new ErrorHandler("Product name must be unique!");
    }
  }
  next();
});

productSchema.pre(
  ["countDocuments", "find", "findOne"],
  function (err, doc, next) {
    doc.where({ is_deleted: false });
  }
);

const Product = mongoose.model("master_products", productSchema);

export default Product;
