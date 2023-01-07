import express from "express";
import { getAboutPage, getIndexPage } from "../controllers/pageController.js";

const router = express.Router();

router.route("/").get(getIndexPage);
router.route("/about").get(getAboutPage);

export default router;
