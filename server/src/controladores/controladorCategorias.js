const {getTodos} = require('./controladoDeTodo')
const findOrCreate = require('mongoose-find-or-create')
const Categorias = require('../modelos/Categorias')

const categorias = async (req,res) =>{
    const todo = await getTodos()
    const nuevoArreglo = todo.map(e => e.categorias[0] ? e.categorias.map(x => x.toLowerCase()).join(", ")/* .split(", ") */: 'Sin categoria')
    const arreglo = new Set(nuevoArreglo)
    const arreglo2 = [...arreglo].sort()
    console.log(arreglo2)
    try {
        
        const recorrido = arreglo2.map(e=>{
            console.log(e)
            const buscar = Categorias.find({nombre: e})
        
            if(buscar.nombre === e){
                return "culoooooooooooooo"
            }else{
                const recorrido2 = Categorias.create({nombre: buscar.nombre})
                return "colaaaaaaaaaaaaa"
            }
        })
    res.send(recorrido)
    /* res.send(buscar) */
    } catch (error) {
        console.log(error)
    }
    /* res.send(arreglo2) */
}

module.exports = {
    categorias
}