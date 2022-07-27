const {Schema} = require("mongoose");
const mongoose = require('mongoose')


const categoriasAccesoriosSchema = new Schema({
  name:{type:String}

},{timestamps:false})

module.exports= mongoose.model("categoriasAccesorios",categoriasAccesoriosSchema)