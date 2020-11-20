const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email cannot be blank.']
    },
    password: {
        type: String,
        required: [true, 'Password cannot be blank.']
    }
});

userSchema.methods.encryptPassword = async function(password) {
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(password,salt);
}

userSchema.methods.validatePassword = async function(password) {
    return bcrypt.compare(password, this.password);
}

module.exports = mongoose.model('User', userSchema);