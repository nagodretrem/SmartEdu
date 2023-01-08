import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import {
  createUser,
  getDashboardPage,
  loginUser,
  logoutUser,
} from "../controllers/authController.js";

const router = express.Router();

//http://localhost:5000/users/signup
router.route("/signup").post(createUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logoutUser);
router.route("/dashboard").get(authMiddleware, getDashboardPage);

export default router;
