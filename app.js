import express from "express";
import * as dotenv from "dotenv";
import connectDB from "./config/database.js";
import pageRoute from "./routes/pageRoute.js";
import courseRoute from "./routes/courseRoute.js";

// Load config
dotenv.config();
// Init express
const app = express();
// Connect to DB
connectDB();

// Set view engine
app.set("view engine", "ejs");

//Middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/", pageRoute);
app.use("/courses", courseRoute);

// Start server
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});