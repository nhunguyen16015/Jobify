import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import morgan from "morgan";
import { nanoid } from "nanoid";
import mongoose from "mongoose";
import { body, validationResult } from "express-validator";

//routers
import jobRouter from "./routes/jobRouter.js";
import authRouter from "./routes/authRouter.js";
//middleware
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/api/v1/test", (req, res) => {
  res.json({ msg: "test route" });
});

app.use("/api/v1/jobs", jobRouter);
app.use("/api/v1/auth", authRouter);

app.use("/api/v1/jobs/:id", jobRouter);

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});


app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ msg: "something went wrong" });
});

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5100;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`server running on Port ${port}....`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
