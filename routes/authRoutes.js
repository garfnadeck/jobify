import express from "express";
import { register, login, updateUser } from "../controllers/authController.js";
import authenticateUser from "../middleware/auth.js";
import rateLimiter from "express-rate-limit";

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message:
    "Too many requests from this IP address, please try again in 15 minutes",
});

const router = express.Router();

router.route("/register").post(apiLimiter, register);
router.route("/login").post(apiLimiter,login);
router.route("/update-user").patch(authenticateUser, updateUser);

export default router;
