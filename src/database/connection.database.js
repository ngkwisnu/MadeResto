import mongoose from "mongoose";

export const connectDatabase = () => {
  mongoose
    .connect(`mongodb://127.0.0.1/maderesto`)
    .then((result) => {
      console.log(`MongoDB Connected!`);
    })
    .catch((err) => {
      console.log(`Connected Fail! ${err.message}`);
    });
};
