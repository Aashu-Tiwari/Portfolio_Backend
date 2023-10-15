const mongoose = require("mongoose");


const studentModel = new mongoose.Schema({
    name:{
        type:String,
        // required:[true,"Firstname is required"],
        minLength:[4,"Firstname should have atleast 4 characters"]
    },
    email:{
        type:String,
        unique:true,
        // required:[true,"Email is required"],
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    subject:{
        type:String,
        // required:[true,"Subject is required"],
        minLength:[4,"Firstname should have atleast 4 characters"]
    },
    message:{
        type:String,
        // required:[true,"Message is required"],
        minLength:[4,"Firstname should have atleast 4 characters"]
    }
},{timestamps:true})

const student = mongoose.model("student",studentModel)

module.exports = student;