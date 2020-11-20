const { verify } = require("crypto");
const express = require("express");
const path = require("path");
const verifyToken = require('./middleware/authMiddleware');
const app = express();
const PORT = process.env.PORT || 5000;

const authRoutes = require('./routes/auth');
const serviceRotutes = require('./routes/service');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', verifyToken, (req, res) => { 
});
app.use("/", authRoutes);
app.use("/api/services", serviceRotutes);


app.listen(PORT, function() {
    console.log("Server Listening at: " + PORT);
})

require('./dbConnection');