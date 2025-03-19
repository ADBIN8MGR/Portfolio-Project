import { Router } from "express";
const router = Router();
import {
  validateLoginInput,
  validateRegisterInput,
} from "../middleware/validationMiddleware.js";
import { register, login } from "../controllers/authController.js";

router.post("/register", validateRegisterInput, register);
router.post("/login", validateLoginInput, login);

export default router;
