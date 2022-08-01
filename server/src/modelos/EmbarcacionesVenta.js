const mongoose = require('mongoose');
const{ Schema } = require("mongoose");


const embarcacionesVenta = new Schema({
    tipo: { type: String, required: true },
    categorias:{type:Array},
    modelo: { type: String, required: true },
    precio: { type: String, required: true },
    astillero: { type: String },
    fabricacion: { type: Number},
    localizacion: { type: String },
    imagenes: { type: Array,required:true },
    numero_de_pasajeros: { type: Number },
    eslora: { type: String,required:true },
    manga: { type: String },
    calado: { type: String },
    numero_de_motores: { type: Number },
    marca_de_motor: { type: String },
    potencia_total: { type: String },
    descripcion:{type:String},
    combustible: { type: String },
    venta: { type: Boolean,defaultValue:true},
    disponible:{type:Boolean,defaultValue:true}
}, { timestamps: false })

module.exports = mongoose.model("EmbarcacionesVenta", embarcacionesVenta)
