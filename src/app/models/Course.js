const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const mongoose_delete = require("mongoose-delete");

const Schema = mongoose.Schema;

const Course = new Schema(
  {
    name: { type: String, default: "", maxLength: 255, required: true },
    description: { type: String, default: "", maxLength: 600 },
    image: { type: String },
    slug: { type: String, slug: "name", unique: true },
  },
  { timestamps: true }
);

// add plugin
mongoose.plugin(slug);
Course.plugin(mongoose_delete, { overrideMethods: "all", deletedAt: true });

module.exports = mongoose.model("Course", Course);
