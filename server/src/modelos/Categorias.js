const {Schema} = require("mongoose");
const mongoose = require('mongoose')
/* const findOrCreate = require('mongoose-find-or-create') */


const categoriasSchema = new Schema({
  nombre:{type:Array}

},{timestamps:false})

module.exports= mongoose.model("categorias", categoriasSchema)
