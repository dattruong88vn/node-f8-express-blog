const mongoose = require("mongoose");
const CourseModel = require("../models/Course");

class SiteController {
  // GET news
  async index(req, res) {
    try {
      const data = await CourseModel.find();
      console.log(data);
      res.json(data);
    } catch (err) {
      res.status(400).json({ error: "Error" });
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
