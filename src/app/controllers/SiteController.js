const CourseModel = require("../models/Course");

const { multipleMongooseToObject } = require("../../utils/mongoose");

class SiteController {
  // GET news
  async index(req, res, next) {
    try {
      let courses = await CourseModel.find();
      courses = multipleMongooseToObject(courses);
      res.render("home", { courses });
    } catch (err) {
      next(err);
    }
  }

  // GET search
  search(req, res) {
    res.render("search");
  }

  searchPost(req, res) {
    res.send("");
  }
}

module.exports = new SiteController();
