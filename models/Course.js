import mongoose from "mongoose";
import slugify from "slugify";

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  slug: {
    type: String,
    unique: true,
  },
});

courseSchema.pre("validate", function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

const Course = mongoose.model("Course", courseSchema);

export default Course;
