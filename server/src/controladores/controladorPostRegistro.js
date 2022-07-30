const Usuarios= require("../modelos/Usuarios");
const bcrypt=require("bcrypt");
const jwt = require("jsonwebtoken")

const usuarios= async (req,res)=>{
    const {email,password,nombre,apellido} = req.body;
    const api = await Usuarios.findOne({ email })
    console.log(api)
    if(api){ 
        res.status(404).send('ya existe')
    }else{
    const user= new Usuarios({email,password,nombre,apellido});
    user.save(err =>{
        if(err){
            console.log(err)
            res.status(404).send("Error al registar el usuario");
        }else{
            let token = jwt.sign({ email: email}, "torombolo", {
                    expiresIn: "10h"
            })
            res.send({
                email:email,
                nombre: nombre,
                token:token
            })
        }
    })
}
};


module.exports= {usuarios}