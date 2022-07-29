<<<<<<< HEAD
const { Schema } = require("mongoose");
const mongoose = require("mongoose")

const categoriasSchema = new Schema({
  nombre:{type:Array}

},{timestamps:false})

module.exports = mongoose.model("categorias",categoriasSchema)
=======
const {Schema} = require("mongoose");
const mongoose = require('mongoose')
/* const findOrCreate = require('mongoose-find-or-create') */


const categoriasSchema = new Schema({
  nombre:{type:String}

},{timestamps:false})
/* categoriasSchema.plugin(findOrCreate) */

module.exports= mongoose.model("categorias", categoriasSchema)
>>>>>>> f4ce25ed315d5d7cdb681ca61547947209a15099
