const Usuarios= require("../modelos/Usuarios");
const transporter = require("../controladores/controladorPostEmail")


const usuariosAuth= (req,res)=>{
    const {email,password} = req.body;
   Usuarios.findOne({email},(err,Usuarios)=>{
    if(err) {
    res.status(404).send("Error al autenticar el correo")
}else if(!Usuarios){
    res.status(404).send("El correo no existe")
} else{
    Usuarios.isCorrectPassword(password,(err,result)=>{
        if(err){
            res.status(500).send("Error al autenticar")
        }else if(result){
            res.send("Correo autenticado correctamente")
        }else {
            res.status(500).send("Correo y/o contraseña incorrecta")
        }
    })
}
    
   });
};



module.exports= {usuariosAuth}