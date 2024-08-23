/////////user model  ///////

const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    userName: {
        type: String,
        required: [true, "Please add the username"]
    },
    email: {
        type: String,
        required: [true, "Please add the email id"],
        unique: [true, "Email id already exists"]
    },
    password: {
        type: String,
        required: [true, "Please add the password"]
    },
    name: { type: String }
    // profilePicture: { type: String },
}, {
    timestamps: true
});

module.exports = mongoose.model("User", userSchema);