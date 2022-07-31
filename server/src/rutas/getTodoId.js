
const {Router} = require("express");
const { getTodos } = require('../controladores/controladoDeTodo')

const getTodoId = Router();

getTodoId.get('/:id', async (req,res)=>{
    const {id} = req.params
    console.log(id)
    const api = await getTodos()
    try {
        if(id){
            const busqueda = api.filter( e => e._id.toString() === id.toString())
            busqueda[0] ?
            res.send(busqueda[0]):
            res.status(404).send(`el id: ${id}; es erroneo`)
        }
    } catch (error) {
        console.log(error)
    }
})

module.exports = getTodoId