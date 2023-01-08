import User from "../models/User.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result === true) {
          // user session
          req.session.userID = user._id;
          res.status(200).redirect("/users/dashboard");
        } else {
          res.status(400).json({
            status: "fail",
            message: "Incorrect password",
          });
        }
      });
    }
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const logoutUser = async (req, res) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        return res.redirect("/");
      }
      //sonra bakıcaz
      res.clearCookie(process.env.SESS_NAME);
      res.redirect("/");
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const getDashboardPage = async (req, res) => {
  const user = await User.findById(req.session.userID);
  res.status(200).render("dashboard", {
    page_name: "dashboard",
    user,
  });
};
