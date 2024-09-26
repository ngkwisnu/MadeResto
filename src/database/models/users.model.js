import mongoose from "mongoose";
import softDelete from "../plugin/softDelete.js";
import handdleError from "../plugin/handdleError.js";
import timestamps from "../plugin/timestamps.js";

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
      unique: true,
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
    deleted_at: {
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

userSchema.plugin(timestamps);
userSchema.plugin(softDelete);
userSchema.plugin(handdleError);

const User = mongoose.model("master_user", userSchema);

export default User;
