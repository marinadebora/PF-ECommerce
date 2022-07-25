const {Schema} = require("mongoose");
const mongoose = require('mongoose')
/* const findOrCreate = require('mongoose-find-or-create') */


const categoriasSchema = new Schema({
  nombre:{type:String}

},{timestamps:false})
/* categoriasSchema.plugin(findOrCreate) */

module.exports= mongoose.model("categorias", categoriasSchema)