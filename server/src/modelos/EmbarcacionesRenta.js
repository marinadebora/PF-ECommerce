let mongoose = require("mongoose")
let  { Schema }= require("mongoose");

const embarcacionSchema = new Schema({
    marca:{
        type: String,
        required: true,
        trim: true
    },
    categoria:{
        type: Array,
        required: true
    },
    modelo:{
        type: String,
        required: true,
        trim: true
    },
    fabricacion:{
        type: String,
    },
    fabricacionDelMotor:{
        type:Number,
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
    cantMotores:{
        type: Number,
        required: true
    },
    hp: {
        type: Number
    },
    marcamotor:{
        type: String,
        required: true
    },
    descripcion:{
        type:Text,

    },
    combustible:{
        type: String,
        required: true
    },
    horas:{
        type: String,
        required:true
    },
    transmision:{
        type: String,
        required: true
    },
    disponible:{
        type: Boolean,
        required:true,
        defaultValue: true
    },
    preciojornada:{
        type:Number,
    },
    preciodia:{
        type:Number
    }
},{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model('embarcaciones', embarcacionSchema)