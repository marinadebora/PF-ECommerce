const Usuarios= require("../modelos/Usuarios");
const bcrypt=require("bcrypt");

const usuarios= (req,res)=>{
    const {email,password,nombre,apellido,carritoDeCompra,historialDeCompra,favoritos,admin} = req.body;
    const user= new Usuarios({email,password,nombre,apellido,carritoDeCompra,historialDeCompra,favoritos,admin});
    user.save(err =>{
        if(err){
            console.log(err)
            res.status(404).send("Error al registar el usuario");
        }else{
            res.send("Usuario Registrado")
        }
    });
};

module.exports= {usuarios}