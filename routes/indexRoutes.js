const express = require("express")
const router = express.Router();
const {studentsignup} = require("../controllers/indexController");

router.get('/',(req,res,next)=>{
    res.json({message:"Homepage"})
})

router.post("/signup", studentsignup);


module.exports = router;