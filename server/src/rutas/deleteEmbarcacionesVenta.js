const { Router } = require('express');
const EmbarcacionesVenta = require('../modelos/EmbarcacionesVenta');

const deleteEmbarcacionesVenta = Router()

deleteEmbarcacionesVenta.delete("/:id",async (req,res)=>{
    const {id} = req.params;
    try {
    const eliminar = await EmbarcacionesVenta.deleteOne({id:id})
<<<<<<< HEAD
        res.send("La Embarcacion se a eliminado correctamente");
    
    } catch (error) {
=======
            res.send("La Embarcacion se a eliminado correctamente")
        } catch (error) {
>>>>>>> 06f193a091c8dea6339d1cf41688b677be7b4fd1
        console.log(error)
    }
})

module.exports = deleteEmbarcacionesVenta