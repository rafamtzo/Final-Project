const { verify } = require("crypto");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cookieParser = require('cookie-parser')


const authRoutes = require('./routes/auth');
const serviceRotutes = require('./routes/service');
const navigationRoutes = require('./routes/navigation');

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", authRoutes);
app.use("/api/services", serviceRotutes);
app.use("/",navigationRoutes);

app.listen(PORT, function() {
    console.log("Server Listening at: " + PORT);
})

require('./dbConnection');