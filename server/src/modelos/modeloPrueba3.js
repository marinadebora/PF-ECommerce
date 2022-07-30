let mongoose = require("mongoose")
let  { Schema }= require("mongoose");

const productoPruebaSchema = new Schema({
    name:{type:String},
    price:{type: String}
    
},{timestamps:false})

module.exports = mongoose.model("ProductoPrueba",productoPruebaSchema)