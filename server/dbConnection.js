require('dotenv').config()

const mongoose = require("mongoose");
const URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_KEY}@cluster0.hccsu.mongodb.net/Final-Project?retryWrites=true&w=majority`;

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(error => console.log(err));

const db = mongoose.connection;

db.once("open", function(){
    console.log("DB Connected!");
})

db.on("error", function(error){
    console.log(error);
})