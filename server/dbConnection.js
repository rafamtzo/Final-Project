const mongoose = require("mongoose");
const connection = "mongodb://localhost/ServiciosDb"

mongoose.connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(error => console.log(err));

const db = mongoose.connection;

db.once("open", function(){
    console.log("DB Connected to: " + connection);
})

db.on("error", function(error){
    console.log(error);
})