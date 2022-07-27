const mongoose = require("mongoose")
const { Schema } = require("mongoose");

const ordenCompra = new Schema({
    productosComprados:{
        type: Array,   
    },
    usuario:{
        type: Array,
    }
    },{
        timestamps:true
    })


module.exports= mongoose.model('OrdenCompra', ordenCompra);    
