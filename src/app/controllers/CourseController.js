const { mogooseToObject } = require("../../utils/mongoose");
const CourseModel = require("../models/Course");

class CourseController {
  // GET courses/:id
  async detail(req, res, next) {
    try {
      const course = await CourseModel.findOne({ slug: req.params.id }).exec();
      if (course) {
        res.render("courses/detail", { course: mogooseToObject(course) });
      }
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new CourseController();
