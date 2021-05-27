const { Router } = require("express");
const studentRouter = require("./routers/studentRouter");
const router = Router();
router.use("/students", studentRouter);
module.exports = router;
