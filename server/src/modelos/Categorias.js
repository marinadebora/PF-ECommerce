<<<<<<< HEAD
const {Schema} = require("mongoose");
const mongoose = require('mongoose')
/* const findOrCreate = require('mongoose-find-or-create') */

=======
const { Schema } = require("mongoose");
const mongoose = require("mongoose")
>>>>>>> aefd48b85a9adc252460ef2247754f8d77bdc283

const categoriasSchema = new Schema({
  nombre:{type:String}

},{timestamps:false})
/* categoriasSchema.plugin(findOrCreate) */

<<<<<<< HEAD
module.exports= mongoose.model("categorias", categoriasSchema)
=======
module.exports = mongoose.model("categorias",categoriasSchema)
>>>>>>> aefd48b85a9adc252460ef2247754f8d77bdc283
