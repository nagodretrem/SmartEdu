import express from "express";
import { createUser } from "../controllers/authController.js";

const router = express.Router();

//http://localhost:5000/users/signup
router.route("/signup").post(createUser);
export default router;
