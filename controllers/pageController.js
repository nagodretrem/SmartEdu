export function getIndexPage(req, res) {
  res.status(200).render("index", {
    page_name: "index",
  });
}

export function getAboutPage(req, res) {
  res.status(200).render("about", {
    page_name: "about",
  });
}
