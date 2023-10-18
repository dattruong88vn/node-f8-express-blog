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

  async edit(req, res, next) {
    try {
      const course = await CourseModel.findById(req.params.id);
      res.render("courses/edit", { course: mogooseToObject(course) });
    } catch (err) {
      next(err);
    }
  }

  // PUT /course/:id
  async update(req, res, next) {
    try {
      await CourseModel.updateOne(
        {
          _id: req.params.id,
        },
        req.body
      );
      res.redirect("/me/store/courses");
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new CourseController();
