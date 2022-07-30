const {Router} = require("express");
const EmbarcacionesVenta = require('../modelos/EmbarcacionesVenta')

const getEmbarVentaId = Router();

getEmbarVentaId.get('/:id', async (req,res) =>{
    const {id} = req.params
    try {
        if(id){
            const busqueda = await EmbarcacionesVenta.find({_id: id})
            busqueda.length ?
            res.send(busqueda):
            res.status(404).send(`El id: ${id}, no existe`)
        }
    } catch (error) {
        res.status(404).send(`el id: ${id}; es erroneo`)
    }
})

module.exports = getEmbarVentaId