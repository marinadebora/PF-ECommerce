const Usuarios = require("../modelos/Usuarios")


const getUsuario = async(req,res)=>{
    const user = await Usuarios.find()
    const map = user.map(e =>{
        return{
            _id: e._id,
            nombre: e.nombre,
            apellido: e.apellido,
            email: e.email,
            password: e.password
        }
    })
    res.send(map)
}

module.exports = {getUsuario}