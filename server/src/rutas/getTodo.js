const {Router} = require("express");
const { getTodos } = require('../controladores/controladoDeTodo')
const Accesorios = require('../modelos/Accesorios')
const EmbarcacionesVenta = require('../modelos/EmbarcacionesVenta')
const EmbarcacionesRenta = require('../modelos/EmbarcacionesRenta')

const getTodo = Router();

getTodo.get('/', async (req,res)=>{
    const {name} = req.query
    const acc = await Accesorios.find()
    const venta = await EmbarcacionesVenta.find()
    const renta = await EmbarcacionesRenta.find()
    const api = await getTodos()
    try {
        if(name){
        let total = []
        const busqueda = venta.filter( e => e.tipo.toLowerCase().includes(name.toLowerCase()))
        const busqueda2 = acc.filter(e => e.producto.toLowerCase().includes(name.toLowerCase()))
        const busqueda3 = renta.filter( e => e.marca.toLowerCase().includes(name.toLowerCase()))
        if(busqueda.length) total.push(busqueda)
        if(busqueda2.length) total.push(busqueda2)
        if(busqueda3.length) total.push(busqueda3)
        
        total.length ?
        res.send(total):
        res.status(404).send(`el id: ${name}; es erroneo`)
    }else{
        res.send(api)
    }
    } catch (error) {
        console.log(error)
    }
})

module.exports = getTodo