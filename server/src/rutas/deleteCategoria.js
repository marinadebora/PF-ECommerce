<<<<<<< HEAD
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

=======
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

>>>>>>> 8b7999e5e529d188888e23223b0e7be6047708bc
module.exports = deleteCategoria