import "express-async-errors"; //it automatically catch error so i don't have to put try catch block in every route
import express from "express";
import dotenv from "dotenv";
const app = express();
import mongoose from "mongoose";
dotenv.config();
const PORT = process.env.PORT || 5000;

//imports
import morgan from "morgan";
import authRouter from "./routes/authRouter.js";
import adminRouter from "./routes/adminRouter.js";

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());

//routes
app.use("/api/auth", authRouter);
app.use("/api/admin", adminRouter);

app.use("*", (req, res) => {
  res.status(404).json({ message: "route not found!" });
});

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
