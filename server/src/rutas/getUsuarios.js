

const {Router} = require("express");
let Usuarios = require("../modelos/Usuarios")

const getUsuarios = Router()

getUsuarios.get('/', async (req,res)=>{
  let usuarios = await Usuarios.find()
    res.send(usuarios)
})

module.exports = getUsuarios