const User = require('../models/user');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => { 
    const { password, email } = req.body;
    const hash = await bcrypt.hash(password, 12);
    const user = new User({
        email,
        password: hash
    })
    await user.save();

    //TODO: redirect to homepage
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const validPassword = await bcrypt.compare(password, user.password);

    if(validPassword) {
        console.log("Worked");   
    } else {
        console.log("Try Again");   
    }

    //TODO: redirect to homepage
}

//TODO: stay signed-in
//TODO: logout
