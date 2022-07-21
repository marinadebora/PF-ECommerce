const mongoose = require("mongoose")
const {Schema } = require("mongoose");

const embarcacionRentaSchema = new Schema({
    marca:{
        type: String,
        required: true,
        trim: true
    },
    categorias:{
        type: Array,
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
        type: String,
        required: true
    },
    hp: {
        type: String
    },
    marcamotor:{
        type: String,
        required: true
    },
    descripcion:{
        type: String
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
        defaultValue:true,
    },
    preciojornada:{
        type:Number
    },
    preciodia:{
        type:Number
    }
},{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model('EmbarcacionesRenta', embarcacionRentaSchema)
