const express = require('express');
const Quiz = require('../Model/quizeModal');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home', { user: req.user });
});

router.get('/signup', (req, res) => {
    res.render('signup', { user: req.user });
});
router.get('/signin', (req, res) => {
    res.render('signin', { user: req.user });
});
router.get('/course/course-add', (req, res) => {
    res.render('course-add', { user: req.user });
});
router.get('/profile', (req, res) => {
    res.render('profile', { user: req.user });
});
router.get('/quiz', async (req, res) => {
    const question = await Quiz.find({});
    const numberOfQuestions = question.length;

    function handleClick(value) {
        console.log('You clicked on:', value);
        // Add your logic here
    }
    res.render('quiz', { user: req.user, questionCollection: question, questionNumber: numberOfQuestions, handleClick });
});
router.get('/signout', (req, res) => {
    res.clearCookie('token');
    res.redirect('signin');
});


module.exports = router;
