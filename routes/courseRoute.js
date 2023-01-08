import express from "express";
import {
  createCourse,
  deleteCourse,
  getAllCourses,
  getCourse,
  updateCourse,
} from "../controllers/courseController.js";
import roleMiddleware from "../middlewares/roleMiddleware.js";

const router = express.Router();

router.route("/").post(roleMiddleware(["teacher", "admin"]), createCourse);
router.route("/").get(getAllCourses);
router.route("/:slug").get(getCourse);
export default router;
