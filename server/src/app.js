let express = require('express');
const index= require('./rutas/index'); 


const app = express();
app.use("/",index)

module.exports=app ;