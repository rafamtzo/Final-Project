const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;

const authRoutes = require('./routes/auth');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/auth", authRoutes);


app.listen(PORT, function() {
    console.log("Server Listening at: " + PORT);
})

require('./dbConnection');