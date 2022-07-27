const { Schema } = require("mongoose");
const mongoose = require("mongoose")

const usuariosSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique: true,
        primaryKey: true
    },
    nombre:{
        type: String,
        required: true
    },
    apellido:{
        type: String,
        required: true
    },
    carritoDeCompra:{
        type:Array,
    },
    historialDeCompras:{
        type: Array
    },
    administrador:{
        type: Boolean,
        defaultValue: false,
    },
    Bloqueado:{
        type: Boolean,
        defaultValue:false
    }
})

module.exports= mongoose.model("Usuarios",usuariosSchema)
