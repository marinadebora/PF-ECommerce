const {Router} = require("express");
const { getEmbarcacionesEnRenta } = require("../controladores/controladorDeEmbarcacionesEnArquilir");
const EmbarcacionesRenta = require('../modelos/EmbarcacionesRenta')

const getEmbarRenta = Router();

getEmbarRenta.get('/', async (req,res)=>{
    const {marca} = req.query
    const api = await EmbarcacionesRenta.find()
    try {
        if(marca){
        const busqueda = await EmbarcacionesRenta.find({marca: marca})
        res.send(busqueda)
    }else{
        res.send(api)
    }
    } catch (error) {
        console.log(error)
    }
    
})

module.exports = getEmbarRenta