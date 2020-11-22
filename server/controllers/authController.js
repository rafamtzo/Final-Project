const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const path = require("path");
require('dotenv').config();

exports.register = async (req, res) => { 
    var user = new User(req.body);
    user.password = await user.encryptPassword(user.password);
    await user.save();
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({email: email });

    if(!user) {
        return res.status(404).send("The user doesn't exist");
    } else {
        const validPassword = await user.validatePassword(password);
        if(validPassword) {
            console.log("Password is valid");   
            //crear token y redireccionar
            const token = jwt.sign({id:user._id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES_IN});
            console.log(token);
            res.cookie("token", token, {httpOnly:true});
            res.redirect('/');
        } else {
            console.log("Password is invalid");
            res.json(`invalid`);   
        }
    }
}

exports.get_login = async (req, res) => {
    res.sendFile(path.resolve('./ingresa.html'));;
}

//TODO: stay signed-in
//TODO: logout