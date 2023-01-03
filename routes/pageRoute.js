import express from "express";
import {
  getAboutPage,
  getIndexPage,
  getCoursesPage,
} from "../controllers/pageController.js";

const router = express.Router();

router.route("/").get(getIndexPage);
router.route("/about").get(getAboutPage);
router.route("/courses").get(getCoursesPage);

export default router;
