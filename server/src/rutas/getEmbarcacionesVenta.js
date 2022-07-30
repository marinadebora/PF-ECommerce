const {Router} = require("express");
const EmbarcacionesVenta = require('../modelos/EmbarcacionesVenta')

const getEmbarVenta = Router();

getEmbarVenta.get('/', async (req,res) =>{
    const {tipo} = req.query
    const api = await EmbarcacionesVenta.find()
    try {
        if(tipo){
        const busqueda = api.filter( e => e.tipo.toLowerCase().includes(tipo.toLowerCase()))
        busqueda.length ?
        res.send(busqueda):
        res.status(404).send(`el id: ${tipo}; es erroneo`)
    }else{
        res.send(api)
    }
    } catch (error) {
        console.log(error)
    }
})

module.exports = getEmbarVenta