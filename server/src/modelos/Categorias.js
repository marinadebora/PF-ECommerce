const {Schema} = require("mongoose");
const mongoose = require('mongoose')


const categoriasAccesoriosSchema = new Schema({
  name:{type:String}

},{timestamps:false})

<<<<<<< HEAD
module.exports= mongoose.model("categoriasAccesorios",categoriasAccesoriosSchema)
=======
module.exports = mongoose.model("categorias",categoriasSchema)
>>>>>>> 77a56649ee0571111bb78f25599754a1f8142395
