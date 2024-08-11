const express = require('express');

const ejs = require('ejs');
const staticRoutes = require('./Routes/staticRoutes');
const authRoutes = require('./Routes/authRoutes');
const path = require('path');
const cookieParser = require('cookie-parser');


const { databaseConnnection } = require('./connectDatabase');
const { checkToken } = require('./middleware');

const app = express();
app.use(cookieParser());


// database connection
databaseConnnection('mongodb://localhost:27017/OnlieLearningPlatform')
    .then(() => {
        console.log('Database connected successfully');
    })
    .catch((error) => {
        console.log(error);
    });

const PORT = process.env.PORT || 8000;

app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static(path.join(__dirname, "public")));
app.use(checkToken("token"));
app.use(express.urlencoded({ extended: true }));

// static routes
app.use(staticRoutes);

// auth routes
app.use(authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
