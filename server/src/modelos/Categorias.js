<<<<<<< HEAD
const {Schema} = require("mongoose");
const mongoose = require('mongoose')
/* const findOrCreate = require('mongoose-find-or-create') */


const categoriasSchema = new Schema({
  nombre:{type:String}

},{timestamps:false})
/* categoriasSchema.plugin(findOrCreate) */

=======
const {Schema} = require("mongoose");
const mongoose = require('mongoose')
/* const findOrCreate = require('mongoose-find-or-create') */


const categoriasSchema = new Schema({
  nombre:{type:String}

},{timestamps:false})
/* categoriasSchema.plugin(findOrCreate) */

>>>>>>> b25d15dbf39bcfbaf5b22f4b36f0049504952cf0
module.exports= mongoose.model("categorias", categoriasSchema)