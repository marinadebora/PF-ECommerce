const { Schema } = require("mongoose");
const mongoose = require("mongoose")


const categoriasNuevosSchema = new Schema({
  name:{type:String}

},{timestamps:false})

module.exports = mongoose.model("categoriasNuevos",categoriasNuevosSchema)
