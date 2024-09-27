import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connectDatabase } from "./database/connection.database.js";
import router from "./routes/index.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/v1", router);

app.listen(process.env.PORT, (req, res) => {
  connectDatabase();
  console.log(`app listen on http://${process.env.HOST}:${process.env.PORT}`);
});
