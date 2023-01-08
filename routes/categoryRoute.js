import express from "express";
import { createCategory } from "../controllers/categoryController.js";

const router = express.Router();

//http://localhost:5000/categories
router.route("/").post(createCategory);
export default router;
