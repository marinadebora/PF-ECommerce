const {Router} = require("express");
const { getEmbarcacionesV } = require("../controladores/ControladorEmbarcacionesVenta");
const EmbarcacionesVenta = require('../modelos/EmbarcacionesVenta')

const getEmbarVenta = Router();

getEmbarVenta.get('/', async (req,res) =>{
    const {tipo} = req.query
    const api = await EmbarcacionesVenta.find()
    try {
        if(tipo){
        const busqueda = await EmbarcacionesVenta.find({tipo: tipo})
        res.send(busqueda)
    }else{
        res.send(api)
    }
    } catch (error) {
        console.log(error)
    }
})

module.exports = getEmbarVenta