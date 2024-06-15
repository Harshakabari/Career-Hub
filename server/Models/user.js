const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        firstName:{
            type:String,
            required:true,
            trim:true
        },
        lastName:{
            type:String,
            required:true,
            trim:true
        },
        email:{
            type:String,
            required:true,
            trim:true
        },
        password:{
            type:String,
            required:true,
        },
        token: {
            type: String,
        },
        resetPasswordExpires: {
             type: Date,
        },
        image: {
             type: String,
        },
        jobs: [
            {
              type: mongoose.Schema.Types.ObjectId,
              ref: "jobpost",
            },
        ],
    }
)
module.exports = mongoose.model("user", userSchema)