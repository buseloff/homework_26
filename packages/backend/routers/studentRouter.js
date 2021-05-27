const { Router } = require("express");
const { studentController } = require("./../controllers");
const studentRouter = Router();
const { upload } = require("./../middleware");
studentRouter
  .route("/")
  .post(studentController.createStudent)
  .get(studentController.getAllStudents);
studentRouter
  .route("/:studentId")
  .get(studentController.getStudentById)
  .put(studentController.updateStudentById, studentController.createStudent)
  .delete(studentController.deleteStudentById);

studentRouter.patch(
  "/:studentId/photo",
  upload.single("sup_image"),
  studentController.addStudentPhoto
);
module.exports = studentRouter;
