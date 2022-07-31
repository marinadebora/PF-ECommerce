const {Router} = require('express');
const EmbarcacionesRenta = require('../modelos/EmbarcacionesRenta')

const deleteEmbarcacionesRenta = Router()

deleteEmbarcacionesRenta.delete("/:id", async (req,res)=>{
    const {id} = req.params
    try {
        let borrado = await EmbarcacionesRenta.deleteOne({_id: id})
        res.send("eliminadisimo")
    }catch (error) {
        console.log(error)
    }
})

module.exports = deleteEmbarcacionesRenta