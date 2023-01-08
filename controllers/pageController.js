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

export function getRegisterPage(req, res) {
  res.status(200).render("register", {
    page_name: "register",
  });
}

export function getLoginPage(req, res) {
  res.status(200).render("login", {
    page_name: "login",
  });
}
