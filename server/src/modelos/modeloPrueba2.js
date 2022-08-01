let mongoose = require("mongoose")
let  { Schema }= require("mongoose");

const carritoPruebaSchema = new Schema({
  usuario:{ type: Schema.types.ObjecId, ref:'UserPrueba', requere: true},
  productos:[
    {
      producto:{type: Schema.types.ObjecId, ref:'ProductoPrueba', requere: true},
      cantidad:{type:Number, defaultValue: 1}
    }
  ]

},{timestamps:false})

module.exports = mongoose.model("CarritoPrueba",carritoPruebaSchema)