import User from "../models/UserModel.js";
import { StatusCodes } from "http-status-codes";
import { hashPassword, comparePassword } from "../utils/psswdUtils.js";
import {
  BadRequestError,
  UnauthenticatedError,
} from "../errors/customErrors.js";
import { createJWT } from "../utils/tokenUtils.js";

export const register = async (req, res) => {
  const adminUser = await User.findOneAndDelete({ role: "admin" });
  if (adminUser) {
    throw new BadRequestError("Admin already exists");
  }

  const hashedPassword = await hashPassword(req.body.password);
  req.body.password = hashedPassword;
  const user = await User.create(req.body);
  console.log(user);

  res.status(StatusCodes.CREATED).json({ msg: "user created" });
};

export const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    console.log("User not found");
    throw new UnauthenticatedError("User not found");
  }

  const isPasswordCorrect = await comparePassword(
    req.body.password,
    user.password
  );
  if (!isPasswordCorrect) throw new UnauthenticatedError("Invalid credentials");

  if (user.role !== "admin") throw new UnauthenticatedError("Access denied");

  const token = createJWT({ userId: user._id, role: user.role });
  console.log(token);

  const oneDay = 1000 * 60 * 60 * 24;
  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === "production",
  });
  res.status(StatusCodes.OK).json({ msg: "user logged in" });
};
