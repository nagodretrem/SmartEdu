import express from "express";
import { createUser, loginUser } from "../controllers/authController.js";

const router = express.Router();

//http://localhost:5000/users/signup
router.route("/signup").post(createUser);
router.route("/login").post(loginUser);
export default router;
