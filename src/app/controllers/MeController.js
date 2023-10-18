const { multipleMongooseToObject } = require("../../utils/mongoose");
const Course = require("../models/Course");

class MeController {
  async storeCourses(req, res, next) {
    try {
      let courses = await Course.find();
      courses = multipleMongooseToObject(courses);

      let countDeleted = await Course.countWithDeleted({ deleted: true });
      res.render("me/store-courses", { courses, countDeleted });
    } catch (err) {
      next(err);
    }
  }

  async trash(req, res, next) {
    try {
      let courses = await Course.findWithDeleted({ deleted: true });
      courses = multipleMongooseToObject(courses);
      res.render("me/courses-trash", { courses });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new MeController();
