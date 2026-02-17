const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
},{
    collection: 'users'
});

module.exports = mongoose.model('users', loginSchema);