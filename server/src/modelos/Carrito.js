let mongoose = require("mongoose")
let  { Schema } = require("mongoose");

const carritoSchema = new Schema({
  usuario:{ type: mongoose.Schema.Types.ObjectId, ref:'Usuarios', requere: true},
  productos:[
    {
      producto:{type: Schema.Types.ObjectId, ref:'Accesorios', requere: true},
      cantidad:{type:Number, default: 1},
      precio:{type: Number, required: true}
    }
  ]

},{timestamps:true})

module.exports = mongoose.model("Carrito",carritoSchema)