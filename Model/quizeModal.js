const mongoose = require('mongoose');

const QuizModalSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        correctAnswer: {
            type: String,
            required: true,
        },
        options: {
            type: [String],
            required: true,
        },
        courseCategory: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'course',
            required: false,
        }
    }, { timestamps: true });


const Quiz = mongoose.model('quiz', QuizModalSchema);
module.exports = Quiz;
