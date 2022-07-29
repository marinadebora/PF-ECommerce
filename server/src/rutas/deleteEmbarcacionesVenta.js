<<<<<<< HEAD
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

=======
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

>>>>>>> f4ce25ed315d5d7cdb681ca61547947209a15099
module.exports = deleteEmbarcacionesVenta