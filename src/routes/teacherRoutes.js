const express = require("express");
const { signup, signin } = require("../controllers/teacherController");
const studentRouter = express.Router();

studentRouter.post("/signup", signup);
studentRouter.post("/signin", signin);

module.exports = studentRouter;
