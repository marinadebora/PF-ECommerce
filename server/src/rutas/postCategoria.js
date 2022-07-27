const {Router} = require('express')
const Categorias = require('../modelos/Categorias')

const postCategorias = Router()

postCategorias.post("/", async (req,res)=>{
    const {nombre} = req.body
    try {
        const todo = await Categorias.find({nombre: nombre})
        if(todo.length){
            res.status(404).send(`Esta categoria: ${nombre}, ya existe`)
        }else{
            const crear = await Categorias.create({nombre: nombre})
            res.send(`La categoria "${nombre}", se agrego correctamente`)
        }
    } catch (error) {
        console.log(error)
    }
})



module.exports = postCategorias