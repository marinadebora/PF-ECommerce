let mongoose = require("mongoose")
let  { Schema }= require("mongoose");


const categoriasNuevosSchema = new Schema({
  name:{type:String}

},{timestamps:false})

module.exports= mongoose.model("categoriasNuevos",categoriasNuevosSchema)