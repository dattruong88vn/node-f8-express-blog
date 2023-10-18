const express = require("express");
const router = express.Router();

const courseController = require("../app/controllers/CourseController");

router.get(`/:id/edit`, courseController.edit);
router.post("/store", courseController.store);
router.put("/update/:id", courseController.update);
router.get("/:id", courseController.detail);

module.exports = router;
