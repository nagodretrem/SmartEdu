import express from "express";
import {
  getAboutPage,
  getIndexPage,
  getRegisterPage,
} from "../controllers/pageController.js";

const router = express.Router();

router.route("/").get(getIndexPage);
router.route("/about").get(getAboutPage);
router.route("/register").get(getRegisterPage);

export default router;
