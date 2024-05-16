const express = require('express');
const router = express.Router();
const { authenticateTeacher } = require('../middleware/authTeacherMiddleware');
const { addCourse } = require('../controllers/courseController');


router.post('/add', authenticateTeacher, addCourse);

module.exports = router;
