const express = require('express');
const index = require('./rutas/index'); 
const morgan = require('morgan')
const cors = require('cors');

const {mongoose} = require('./dataBase')

const app = express();

app.use(morgan("dev"))
app.use(cors())
app.use("/",index)

module.exports = app ;