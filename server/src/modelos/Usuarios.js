const { Schema } = require("mongoose");
const mongoose = require("mongoose")

const usuariosSchema = new Schema({
    id:{
        required:true,
        primaryKey:true   
    },
})

module.exports = mongoose.model('usuario', usuariosSchema)