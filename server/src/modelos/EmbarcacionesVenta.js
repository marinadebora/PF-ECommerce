import { Schema, model } from "mongoose";


const embarcacionesVenta = new Schema({
    tipo: { type: String, required: true },
    modelo: { type: String, required: true },
    precio: { type: String, required: true },
    astillero: { type: String },
    fabricacion: { type: String },
    localizacion: { type: String },
    imagen: { type: Array,required:true },
    numeroDePasajeros: { type: String },
    eslora: { type: String,required:true },
    manga: { type: String },
    calado: { type: String },
    numeroDeMotores: { type: String },
    marcaDeMotor: { type: String },
    potencia: { type: String },
    combustible: { type: String },
    venta: { type: Boolean, required:true },
    disponible:{type:Boolean,required:true}
}, { timestamps: false })



export default model("embarcacionesVenta", embarcacionesVenta)
<<<<<<< HEAD:server/src/modelos/EmbarcacionesVenta.js









=======
>>>>>>> b7f6615e62cb1d0f1a917794dfbd1b3ab6be48c8:server/src/modelos/EmbarcacionesVenta.ts
