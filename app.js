import express from "express";
const app = express();

const port = 3000;

// Set view engine
app.set("view engine", "ejs");

//Middleware
app.use(express.static("public"));

// Routes
app.get("/", (req, res) => {
  res.status(200).render("index", {
    page_name: "index",
  });
});

app.get("/about", (req, res) => {
  res.status(200).render("about", {
    page_name: "about",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
