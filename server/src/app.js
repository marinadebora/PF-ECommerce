let express = require('express');
let morgan = require("morgan")
const index= require('./rutas/index'); 
const mongoose = require("./dataBase")
let cors =require("cors")
let bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(morgan("dev"));
app.use(cors());
app.use("/",index)

module.exports = app ;