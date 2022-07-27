<<<<<<< HEAD
const express = require('express');
const index = require('./rutas/index'); 
const morgan = require('morgan')
const cors = require('cors');
const bodyParser = require('body-parser')


const {mongoose} = require('./dataBase')

const app = express();

<<<<<<< HEAD
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({extended: true}))
=======
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({extended: true,  limit: '50mb' }))
>>>>>>> 77a56649ee0571111bb78f25599754a1f8142395

app.use(morgan("dev"))
app.use(cors())
app.use("/",index)

=======
const express = require('express');
const index = require('./rutas/index'); 
const morgan = require('morgan')
const cors = require('cors');
const bodyParser = require('body-parser')

const {mongoose} = require('./dataBase')

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(morgan("dev"))
app.use(cors())
app.use("/",index)

>>>>>>> debora/carrito
module.exports = app ;