let mongoose = require("mongoose")
let  { Schema }= require("mongoose");

const categoriasAccesoriosSchema = new Schema({
  name:{type:String}

},{timestamps:false})

module.exports= mongoose.model("categoriasAccesorios",categoriasAccesoriosSchema)