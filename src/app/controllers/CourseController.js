const { mogooseToObject } = require("../../utils/mongoose");
const CourseModel = require("../models/Course");

class CourseController {
  async detail(req, res, next) {
    try {
      const course = await CourseModel.findOne({ slug: req.params.id });
      if (course) {
        res.render("courses/detail", { course: mogooseToObject(course) });
      }
    } catch (err) {
      next(err);
    }
  }

  create(req, res, next) {
    try {
      res.render("courses/create");
    } catch (err) {
      next(err);
    }
  }

  async store(req, res, next) {
    try {
      const course = new CourseModel(req.body);
      const data = await course.save();
      res.redirect(`/courses/${data.slug}`);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new CourseController();
