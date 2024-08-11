const mongoose = require('mongoose');

const CourseModalSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        courseDescription: {
            type: String,
            required: true,
        },
        courseImageUrl: {
            type: String,
            required: true,
        },
        numberOfChapter: {
            type: Number,
            required: true,
        },
        chapterTitle: {
            type: [String],
            required: true,
        },
    }, { timestamps: true });


const Course = mongoose.model('course', CourseModalSchema);
module.exports = Course;
