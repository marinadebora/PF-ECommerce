import { Schema,model } from "mongoose";

const accesorioSchema = new Schema({
    nombre:{
        type: String,
        required: true,
        trim:true
    },
    tipo:{
        type:String,
        required:true
    },
    imagen:{
        type: String,
        required: true,
        trim:true
    },
    descripcion:{
        type: String,
        trim: true
    },
    tamanio:{
        type: String,
        trim:true
    },
    precio:{
        type:String,
        required: true
    },
    stock:{
        type:String,
        required:true
    }
},{
    versionKey:false,
    timestamps:true
})

export default model("Accesorio",accesorioSchema);