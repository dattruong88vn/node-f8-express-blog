const express = require("express");
const router = express.Router();

const meController = require("../app/controllers/MeController");

router.get("/store/courses", meController.storeCourses);
router.get("/courses/trash", meController.trash);

module.exports = router;
