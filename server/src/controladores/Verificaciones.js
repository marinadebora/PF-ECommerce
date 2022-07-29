const jwt = require("jsonwebtoken")

exports.requireSignin = (req, res, next) => {
    const respuesta = req.headers.authorization
    if(!respuesta) {
        return res.status(400).json({ message: "Authorization required" });
    } else {
        /* const token = req.headers.authorization.split(" ")[1] */;
        jwt.verify(respuesta, "torombolo",(error, usuario)=>{
            if(error){
                res.send('Acceso denegado')
            }else{
                next();
            }
        });
    }
};