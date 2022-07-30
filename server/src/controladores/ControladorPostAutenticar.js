const Usuarios= require("../modelos/Usuarios");
const transporter = require("../controladores/controladorPostEmail")

const jwt = require("jsonwebtoken")

const usuariosAuth= (req,res)=>{
    const {email,password} = req.body;
    Usuarios.findOne({email},(err,Usuarios)=>{
    if(err) {
    res.status(404).send("Error al autenticar el correo")
}else if(!Usuarios){
    res.status(404).send("Hay campos erroneos")
} else{
    Usuarios.isCorrectPassword(password,(err,result)=>{
        if(err){
            res.status(500).send("Error al autenticar")
        }else if(result){
            console.log(req.headers.authorization/* .split(" ")[1] */)
            let token = jwt.sign({Usuarios}, "torombolo", {
                expiresIn: "10h"
            })
            res.cookie("token", token, { expiresIn: "10h" });
            res.send({email,token})
        }else {
            res.status(500).send("Correo y/o contraseña incorrecta")
        }
    })
}
    
    });
    
};



module.exports= {usuariosAuth}