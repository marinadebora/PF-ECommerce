const {Schema} = require("mongoose");
const mongoose = require('mongoose')


const categoriasSchema = new Schema({
  name:{type:String}

},{timestamps:false})

module.exports = mongoose.model("categorias",categoriasSchema)
