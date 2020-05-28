const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userId: String,
    username: String,
    oil: Number,
    inventory: Object
})

const User = mongoose.model("User", UserSchema);

module.exports = User;