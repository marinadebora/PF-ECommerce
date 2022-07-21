const {Router} = require("express");
const Accesorios = require('../modelos/Accesorios')

const getAccesoriosId = Router();

getAccesoriosId.get('/:id', async (req,res)=>{
    const {id} = req.params
    console.log(id)
    try {
        if(id){
            const busqueda = await Accesorios.find({_id:id})
            console.log(busqueda)
            res.send(busqueda)
        }
    } catch (error) {
        res.status(404).send(`el id: ${id}; es erroneo`)
    }
})

module.exports = getAccesoriosId