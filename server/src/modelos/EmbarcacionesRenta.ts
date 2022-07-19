import { Schema, model } from "mongoose";

const embarcacionSchema = new Schema({
    marca:{
        type: String,
        required: true,
        trim: true
    },
    categoria:{
        type: String,
        required: true
    },
    modelo:{
        type: String,
        required: true,
        trim: true
    },
    venta:{
        type: Boolean,
        required: true
    },
    renta:{
        trpe: Boolean,
        required: true
    },
    fabricacion:{
        type: String,
    },
    fabricacionMotor:{
        type:String,
    },
    motor:{
        type: String,
        required: true,
        trim: true
    },
    imagenes:{
        type: Array,
        required: true
    },
    eslora:{
        type: String,
        required: true
    },
    manga:{
        type: String,
    },
    puntal:{
        type: String,
        required: true
    },
    cantidadMotores:{
        type: Number,
        required: true
    },
    hp: {
        type: Number
    },
    marcaMotor:{
        type: String,
        required: true
    },
    combustible:{
        type: String,
        required: true
    },
    duracionDelConbustible:{
        type: String,
        required:true
    },
    transmision:{
        type: String,
        required: true
    },
    disponibilidad:{
        type: Boolean,
        required:true,
        defaultValue: true
    }

},{
    versionKey:false,
    timestamps:true
})

export default(model('embarcaciones', embarcacionSchema))