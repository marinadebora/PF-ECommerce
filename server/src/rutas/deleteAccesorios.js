const {Router} = require("express");
const Accesorios = require('../modelos/Accesorios')

const deleteAccesorios = Router();

deleteAccesorios.delete('/:id', async (req,res)=>{
    const {id} = req.params
    try {
        const busqueda = await Accesorios.deleteOne({_id:id})
        res.send(`El accesorio se elimino correctamente`)
    } catch (error) {
        console.log(error)
    }
})

module.exports = deleteAccesorios