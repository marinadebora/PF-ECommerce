let express = require('express');
let morgan = require("morgan")
const index= require('./rutas/index'); 
const mongoose = require("./dataBase")

const app = express();
app.use(morgan("dev"));
app.use("/",index)

module.exports=app ;