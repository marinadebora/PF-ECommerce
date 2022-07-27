<<<<<<< HEAD
<<<<<<< HEAD
const {Schema} = require("mongoose");
const mongoose = require('mongoose')
/* const findOrCreate = require('mongoose-find-or-create') */


const categoriasSchema = new Schema({
  nombre:{type:String}

},{timestamps:false})
/* categoriasSchema.plugin(findOrCreate) */

module.exports= mongoose.model("categorias", categoriasSchema)
=======
const { Schema } = require("mongoose");
const mongoose = require("mongoose")

const categoriasSchema = new Schema({
  nombre:{type:Array}

},{timestamps:false})

module.exports = mongoose.model("categorias",categoriasSchema)
>>>>>>> 77a56649ee0571111bb78f25599754a1f8142395
=======
const {Schema} = require("mongoose");
const mongoose = require('mongoose')
/* const findOrCreate = require('mongoose-find-or-create') */


const categoriasSchema = new Schema({
  nombre:{type:String}

},{timestamps:false})
/* categoriasSchema.plugin(findOrCreate) */

module.exports= mongoose.model("categorias", categoriasSchema)
>>>>>>> debora/carrito
