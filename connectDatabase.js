const mongoose = require('mongoose');
async function databaseConnnection(URL) {

    return await mongoose.connect(URL);

}

module.exports = { databaseConnnection, }
