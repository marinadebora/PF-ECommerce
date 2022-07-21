const { Schema } = require("mongoose");
const mongoose = require("mongoose")

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
