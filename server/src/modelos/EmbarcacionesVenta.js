let mongoose = require("mongoose")
let  { Schema }= require("mongoose");


const embarcacionesVenta = new Schema({
    tipo: { type: String, required: true },
    modelo: { type: String, required: true },
    precio: { type: String, required: true },
    astillero: { type: String },
    fabricacion: { type: String },
    localizacion: { type: String },
    imagenes: { type: Array,required:true },
    numeroDePasajeros: { type: String },
    eslora: { type: String,required:true },
    manga: { type: String },
    calado: { type: String },
    numeroDeMotores: { type: String },
    marcaDeMotor: { type: String },
    potencia: { type: String },
    combustible: { type: String },
    venta: { type: Boolean, required:true, defaultValue: true },
    disponible: {type:Boolean,required:tru, defaultValue:true}
}, { timestamps: false })



module.exports= mongoose.model("embarcacionesVenta", embarcacionesVenta)









