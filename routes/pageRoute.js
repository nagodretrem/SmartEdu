import express from "express";
import {
  getAboutPage,
  getIndexPage,
  getLoginPage,
  getRegisterPage,
} from "../controllers/pageController.js";
import redirectMiddleware from "../middlewares/redirectMiddleware.js";

const router = express.Router();

router.route("/").get(getIndexPage);
router.route("/about").get(getAboutPage);
router.route("/register").get(redirectMiddleware, getRegisterPage);
router.route("/login").get(redirectMiddleware, getLoginPage);

export default router;
