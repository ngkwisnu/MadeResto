import mongoose from "mongoose";
import ErrorHandler from "../../utils/error.handler.js";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
    },
    address: {
      type: String,
    },
    phone_number: {
      type: String,
    },
    refresh_token: {
      type: String,
      default: null,
    },
    is_deleted: {
      type: Date,
      default: null,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

userSchema.pre(["find", "fineOne"], function () {
  this.where({ is_deleted: null });
});

userSchema.post("save", function (err, doc, next) {
  if (err.code === 11000) {
    if (err.keyValue.username) {
      throw new ErrorHandler("Username must be unique", 400);
    }
  }
});

const User = mongoose.model("master_user", userSchema);

export default User;
