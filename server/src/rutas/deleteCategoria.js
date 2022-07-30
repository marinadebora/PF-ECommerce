const {Router} = require("express");
const Categorias = require('../modelos/Categorias')

const deleteCategoria = Router();

deleteCategoria.delete('/:id', async (req,res)=>{
    const {id} = req.params
    try {
        const busqueda = await Categorias.deleteOne({_id:id})
        res.send(`La Categoria se elimino correctamente`)
    } catch (error) {
        console.log(error)
    }
})

module.exports = deleteCategoria