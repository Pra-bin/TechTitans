const mongoose = require('mongoose');

const UserModalSchema = mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            default: 'user',
            enum: ['user', 'admin'],
        },
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model('user', UserModalSchema);
module.exports = User;
