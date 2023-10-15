require("dotenv").config({path:"./.env"});
const express = require("express")
const app = express();


// db connection
require("./Models/database").connectDatabase();


// logger
const logger = require("morgan")
app.use(logger("tiny"))

// bodyparser 
app.use(express.json());
app.use(express.urlencoded({extended: false}))

// Cors
const cors = require("cors");
app.use(cors({ credentials: true, origin: true }));

app.use("/", require('./routes/indexRoutes'))


app.listen(process.env.PORT, console.log(`Server is running on PORT ${process.env.PORT}`))