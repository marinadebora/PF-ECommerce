<<<<<<< HEAD
const mongoose = require('mongoose');
const { Schema } = require("mongoose");

const accesorioSchema = new Schema({
    producto:{
        type: String,
        required: true,
        trim:true
    },
    categorias:{
        type: Array,
        required:true
    },
    imagenes:{
        type: Array,
        required: true,
        trim:true
    },
    descripcion:{
        type: String,
        trim: true
    },
    dimensiones:{
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
    },
    valoraciones:{
        type: Array
    },
    rating:{
        type: Number
    },
    comentarios:{
        type: Array
    }
},{
    versionKey:false,
    timestamps:true
})

module.exports= mongoose.model('Accesorios', accesorioSchema);
=======
const mongoose = require('mongoose');
const { Schema } = require("mongoose");

const accesorioSchema = new Schema({
    producto:{
        type: String,
        required: true,
        trim:true
    },
    categorias:{
        type: Array,
        required:true
    },
    imagenes:{
        type: Array,
        required: true,
        trim:true
    },
    descripcion:{
        type: String,
        trim: true
    },
    dimensiones:{
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

module.exports= mongoose.model('Accesorios', accesorioSchema);
>>>>>>> f4ce25ed315d5d7cdb681ca61547947209a15099
