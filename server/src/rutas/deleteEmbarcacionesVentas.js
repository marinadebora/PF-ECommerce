const { Router } = require('express');
const EmbarcacionesVenta = require('../modelos/EmbarcacionesVenta');

const deleteEmbarcacionesVenta = Router()

deleteEmbarcacionesVenta.delete("/:id",async (req,res)=>{
    const {id} = req.params;
    try {
    const eliminar = await EmbarcacionesVenta.deleteOne({_id:id})
            res.send("La Embarcacion se a eliminado correctamente")
        } catch (error) {
        console.log(error)
    }
})

module.exports = deleteEmbarcacionesVenta

