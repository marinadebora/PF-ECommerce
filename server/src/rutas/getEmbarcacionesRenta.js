const {Router} = require("express");
const EmbarcacionesRenta = require('../modelos/EmbarcacionesRenta')

const getEmbarRenta = Router();

getEmbarRenta.get('/', async (req,res)=>{
    const {marca} = req.query
    const api = await EmbarcacionesRenta.find()
    try {
        if(marca){
        const busqueda = api.filter( e => e.marca.toLowerCase().includes(marca.toLowerCase()))
        busqueda.length ?
        res.send(busqueda):
        res.status(404).send(`el id: ${marca}; es erroneo`)
    }else{
        res.send(api)
    }
    } catch (error) {
        console.log(error)
    }
    
})

module.exports = getEmbarRenta