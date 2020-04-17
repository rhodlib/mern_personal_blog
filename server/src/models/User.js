//Imports
const { Schema, model } = require("mongoose");
const validator = require("validator");

//User Schema
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        minlength: 6,
        maxlength: 12
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if(!validator.isEmail(value)){
                throw new Error("Email is invalid");
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        trim: true
    }
});

const User = model("User", userSchema);

//Export
module.exports = User;