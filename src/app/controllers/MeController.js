const { multipleMongooseToObject } = require("../../utils/mongoose");
const CourseModel = require("../models/Course");

class MeController {
  async storeCourses(req, res, next) {
    try {
      let courses = await CourseModel.find();
      courses = multipleMongooseToObject(courses);
      res.render("me/store-courses", { courses });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new MeController();
