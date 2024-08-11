const Quiz = require("../Model/quizeModal");
const User = require("../Model/userModal");
const { hasPassword, checkPassword, generateToken } = require("../utils");


const handleSignUpData = async (req, res) => {
    const body = req.body;


    if (!body.fullName || !body.email || !body.password) return res.render('signup', { error: 'All fields are required' });

    const userExist = await User.findOne({ email: body.email });
    if (userExist) return res.render('signup', { error: 'User already exist' });




    const hashedPassword = await hasPassword(body.password);

    await User.create({
        fullName: body.fullName, email: body.email, password: hashedPassword,
    });


    return res.redirect('signin', 200, { success: 'User created successfully' });
}



const handleSignInData = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) return res.render('signin', { error: 'All fields are required' });

    const user = await User.findOne({ email });
    // console.log(user);
    if (!user) return res.render('signin', { error: 'User does not exist' });

    const isValid = await checkPassword(password, user.password);

    if (!isValid) return res.render('signin', { error: 'Invalid Information' });

    const token = await generateToken(user, user.password = null);
    // location.reload();
    res.cookie('token', token);

    return res.redirect('/', 200, { success: 'Login successful' });

}

const handleCourseAdd = async (req, res) => {
    const body = req.body;

    if (!body.title || !body.correctAnswer || !body.options) return res.render("course-add", { error: 'All fields are required' });

    const quiz = await Quiz.create({
        title: body.title,
        correctAnswer: body.correctAnswer,
        options: body.options,
    });

    return res.render("courseAdd",);
}

module.exports = { handleSignUpData, handleSignInData, handleCourseAdd };
