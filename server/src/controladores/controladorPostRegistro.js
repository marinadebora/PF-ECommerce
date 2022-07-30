const Usuarios= require("../modelos/Usuarios");
const bcrypt=require("bcrypt");

const usuarios= (req,res,next)=>{
    const {email,password,nombre,apellido} = req.body;
    const user= new Usuarios({email,password,nombre,apellido});
    user.save(err =>{
        if(err){
            console.log(err)
            res.status(404).send("Error al registar el usuario");
        }else{
            res.send("Usuario Registrado")
             next()
        }
    });
};


module.exports= {usuarios}