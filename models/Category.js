import mongoose from "mongoose";
import slugify from "slugify";

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },

  slug: {
    type: String,
    unique: true,
  },
});

CategorySchema.pre("validate", function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

const Category = mongoose.model("Category", CategorySchema);

export default Category;
