const {Router} = require("express");
const Accesorios = require('../modelos/Accesorios')

const getAccesorios = Router();

getAccesorios.get('/', async (req,res)=>{
    const {producto} = req.query
    const api = await Accesorios.find()
    try {
        if(producto){
        const busqueda = api.filter( e => e.producto.toLowerCase().includes(producto.toLowerCase()))
        busqueda.length ?
        res.send(busqueda):
        res.status(404).send(`el id: ${producto}; es erroneo`)
    }else{
        res.send(api)
    }
    } catch (error) {
        console.log(error)
    }
})

module.exports = getAccesorios