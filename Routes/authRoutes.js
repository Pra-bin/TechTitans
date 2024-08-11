const express = require('express');
const { handleSignUpData, handleSignInData, handleCourseAdd } = require('../Controller');
const router = express.Router();

router.post('/signup', handleSignUpData);

router.post('/signin', handleSignInData);
router.post('/course/course-add', handleCourseAdd);

module.exports = router;
