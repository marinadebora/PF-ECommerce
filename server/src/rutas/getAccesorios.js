const {Router} = require("express");
const Accesorios = require('../modelos/Accesorios')

const getAccesorios = Router();

getAccesorios.get('/', async (req,res)=>{
    const {producto} = req.query
    const api = await Accesorios.find()
    try {
        if(producto){
        const busqueda = await Accesorios.find({producto: producto})
        res.send(busqueda)
    }else{
        res.send(api)
    }
    } catch (error) {
        console.log(error)
    }
})

module.exports = getAccesorios