const {Router} = require("express");
const Accesorios = require('../modelos/Accesorios')

const getAccesoriosId = Router();

getAccesoriosId.get('/:id', async (req,res)=>{
    const {id} = req.params
    console.log(id)
    try {
        if(id){
            const busqueda = await Accesorios.find({_id:id})
            busqueda.length ?
            res.send(busqueda):
            res.status(404).send(`El id: ${id}, no existe`)
        }
    } catch (error) {
        console.log(error)
    }
})

module.exports = getAccesoriosId