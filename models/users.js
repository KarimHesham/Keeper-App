const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");


const Schema = mongoose.Schema;


const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    
    password: {
        type: String,
        minlength: 8
    },
    googleId: {
        type: String
    }
},

    {
        timestamps: true,
    
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);


module.exports = User;