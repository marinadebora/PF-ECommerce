<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> aefd48b85a9adc252460ef2247754f8d77bdc283
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

<<<<<<< HEAD
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

>>>>>>> 8b7999e5e529d188888e23223b0e7be6047708bc
=======
>>>>>>> aefd48b85a9adc252460ef2247754f8d77bdc283
module.exports = deleteEmbarcacionesVenta