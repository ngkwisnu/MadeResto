import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connectDatabase } from "./database/connection.database.js";
import User from "./routes/users.routes.js";
import Auth from "./routes/auth.routes.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/user", User);
app.use("/auth", Auth);

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(process.env.PORT, (req, res) => {
  connectDatabase();
  console.log(`app listen on http://${process.env.HOST}:${process.env.PORT}`);
});
