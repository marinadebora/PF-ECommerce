let mongoose = require("mongoose")
let  { Schema }= require("mongoose");

const categoriasUsadosSchema = new Schema({
  name:{type:String}

},{timestamps:false})

module.exports = mongoose.model("categoriasUsados",categoriasUsadosSchema)