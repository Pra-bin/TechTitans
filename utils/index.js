const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');
const saltRounds = 10;
const private_key = "techTitans123!@#$%";

// hash password
async function hasPassword(password) {
    return await bcrypt.hash(password, saltRounds);
}
// check hashed password
async function checkPassword(password, hashedPassword) {
    return await bcrypt.compare(password, hashedPassword);
}

async function generateToken(user) {
    const token = await JWT.sign({ id: user._id, name: user.name, role: user.role, email: user.email }, private_key, { expiresIn: '24h' });
    return token;
}
async function tokenVerification(userToken) {
    const user = await JWT.verify(userToken, private_key);
    return user;
}
module.exports = {
    hasPassword, checkPassword, generateToken, tokenVerification
};
