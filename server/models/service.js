const mongoose = require('mongoose');
const User = require('./user');
const { Schema } = mongoose;

const serviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name cannot be blank.']
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        min: 0,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Service', serviceSchema);