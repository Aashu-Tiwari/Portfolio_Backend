const Student = require("../Models/Studentmodel");




exports.studentsignup = async(req,res,next)=>{
    const student = await new Student(req.body).save();
    res.json({message:"User is added"})
    console.log(student)
}