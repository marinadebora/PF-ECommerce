let mongoose = require("mongoose")
let  { Schema }= require("mongoose");


const usuariosSchema = new Schema({
    id:{
        
        required:true,
        primaryKey:true   
    },
    carritoCompra:{
        type:Array,
    }
})

module.exports= mongoose.model("Usuarios",usuariosSchema)