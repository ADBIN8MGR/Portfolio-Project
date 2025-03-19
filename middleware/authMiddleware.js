import {
  UnauthorizedError,
  UnauthenticatedError,
} from "../errors/customErrors.js";
import { verfiyToken } from "../utils/tokenUtils.js";

export const authenticateUser = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) throw new UnauthenticatedError("Authentication invalid!");
  try {
    const { userId, role } = verfiyToken(token);
    req.user = { userId, role };
    next();
  } catch (error) {
    throw new UnauthorizedError("Authentication invalid!");
  }
};

export const authorizeAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    throw new UnauthorizedError("Admin access only");
  }
  next();
};
