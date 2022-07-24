const {getTodos} = require('./controladoDeTodo')
/* const findOrCreate = require('mongoose-find-or-create') */
const Categorias = require('../modelos/Categorias')

const categorias = async (req,res) =>{
    /* const todo = await getTodos()
    const nuevoArreglo = todo.map(e => e.categorias[0] ? e.categorias.map(x => x.toLowerCase()).join(", "): 'Sin categoria')
    const arreglo = new Set(nuevoArreglo)
    const arreglo2 = [...arreglo].sort()
    res.send(arreglo2) */
    try { 
        const todo = await Categorias.find()
        const nuevoArreglo = todo.map(e => e.nombre).join(", ").split(", ")
        const arreglo = new Set(nuevoArreglo)
        const arreglo2 = [...arreglo].sort()
        res.send(arreglo2)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    categorias
}