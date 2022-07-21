const {Router} = require("express");
const EmbarcacionesRenta = require('../modelos/EmbarcacionesRenta')

const getEmbarRentaId = Router();

getEmbarRentaId.get('/:id', async (req,res)=>{
    const {id} = req.params
    try {
        if(id){
        const busqueda = await EmbarcacionesRenta.find({_id: id})
        res.send(busqueda)
    }
    } catch (error) {
        res.status(404).send(`el id: ${id}; es erroneo`)
    }
    
})

module.exports = getEmbarRentaId