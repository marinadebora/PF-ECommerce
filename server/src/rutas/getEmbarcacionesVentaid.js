const {Router} = require("express");
const EmbarcacionesVenta = require('../modelos/EmbarcacionesVenta')

const getEmbarVentaId = Router();

getEmbarVentaId.get('/:id', async (req,res) =>{
    const {id} = req.params
    try {
        if(id){
            const busqueda = await EmbarcacionesVenta.find({_id: id})
            res.send(busqueda)
        }
    } catch (error) {
        res.status(404).send(`el id: ${id}; es erroneo`)
    }
})

module.exports = getEmbarVentaId