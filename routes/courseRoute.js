import express from "express";
import {
  createCourse,
  deleteCourse,
  getAllCourses,
  getCourse,
  updateCourse,
} from "../controllers/courseController.js";

const router = express.Router();

router.route("/").post(createCourse);
router.route("/").get(getAllCourses);
router.route("/:slug").get(getCourse);
export default router;
