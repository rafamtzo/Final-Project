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