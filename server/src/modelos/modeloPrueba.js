const { Schema } = require("mongoose");
const mongoose = require("mongoose")


const userPruebaSchema = new Schema({
  name:{type:String},

},{timestamps:false})

module.exports = mongoose.model("UserPrueba",userPruebaSchema )
