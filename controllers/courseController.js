import Course from "../models/Course.js";
import Category from "../models/Category.js";

export const createCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.status(201).redirect("/courses");
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const getAllCourses = async (req, res) => {
  try {
    const categorySlug = req.query.categories;

    let filter = {};

    if (categorySlug) {
      const category = await Category.findOne({ slug: categorySlug });
      filter = { category: category._id };
    }

    const courses = await Course.find(filter).sort({ createdAt: -1 });
    const categories = await Category.find();

    res.status(200).render("courses", {
      courses,
      categories,
      page_name: "courses",
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const getCourse = async (req, res) => {
  try {
    const categories = await Category.find();
    const course = await Course.findOne({ slug: req.params.slug });
    res.status(200).render("course", {
      course,
      categories,
      page_name: "course",
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const updateCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: "success",
      data: {
        course,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};

export const deleteCourse = async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
