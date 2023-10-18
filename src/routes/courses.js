const express = require("express");
const router = express.Router();

const courseController = require("../app/controllers/CourseController");

router.get("/create", courseController.create);
router.get(`/:id/edit`, courseController.edit);
router.post("/store", courseController.store);
router.put("/:id", courseController.update);
router.delete("/:id", courseController.delete);
router.put("/:id/restore", courseController.restore);
router.delete("/:id/delete", courseController.forceDelete);
router.get("/:id", courseController.detail);

module.exports = router;
