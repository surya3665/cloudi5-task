const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true,
    },
    MobileNumber:{
        type:Number,
        required:true,
    },
    Country:{
        type:String,
        required:true,
    },
    City:{
        type:String,
        required:true,
    },
    Address:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:true,
    },
    State:{
        type:String,
        required:true,
    },
    Pincode:{
        type:Number,
        required:true,
    },
},{timestamps:true})

const UserModel = mongoose.model("user",UserSchema)

module.exports=UserModel