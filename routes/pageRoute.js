import express from "express";
import {
  getAboutPage,
  getIndexPage,
  getLoginPage,
  getRegisterPage,
} from "../controllers/pageController.js";

const router = express.Router();

router.route("/").get(getIndexPage);
router.route("/about").get(getAboutPage);
router.route("/register").get(getRegisterPage);
router.route("/login").get(getLoginPage);

export default router;
