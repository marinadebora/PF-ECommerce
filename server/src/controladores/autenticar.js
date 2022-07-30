
const { transporter } = require('../controladores/controladorPostEmail');
const Router = require("express"); 
const router = Router();
const { body } = require('express-validator');
const { validacioncampos } = require('../middlewares/validador-de-campos')

// router.post("/", 
// // body('contact_user','El nombre es obligatorio').notEmpty(),
// // body('correo_user','El correo es obligatorio').isEmail(),
// // body('asunto_user','El asunto es obligatorio').notEmpty(),
// // body('descripcion_user','la descripsion es obligatoria').notEmpty(),
// validacioncampos, async (req, res) => {
//     const {email } = req.body;
  
//     try {-
//         await transporter.sendMail({
//             from: ` <accesoriosnautica02@gmail.com>`, // sender address
//             to: email, // list of receivers
//             subject: ` -> AccesoriosNautica`, // Subject line
//             text: "", // plain text body,
//             html:`<b>de:AccesoriosNautica </b>
//             <br></br>
//             <p>Tu usuario se creo correctamente</p>
//             `
//           });
//           return res.json({
//             ok: true,
//         });
//     } catch (error) {
//         console.log(error);
//         return res.json({
//             ok: false,
//         });
//     }
// });
 



const correo = async (req,res = response)=>{
    const {email,password,nombre,apellido} = req.body;
    try {
        await transporter.sendMail({
            from: '"Usuario Creado 🚢" <accesoriosnautica02@gmail.com>', // sender address
            to: email, // list of receivers
            subject: "AccesoriosNautica", // Subject line
            text: "", // plain text body
            html: `"<b>De:accesoriosnautica02@gmail.com</b>"
            <p>Password: ${password}</p>
            <p>Nombre: ${nombre}</p>
            <p>Apellido: ${apellido}</p>
            `, // html body
        });
         return("Correo Enviado")
    } catch (error) {
        console.log(error)
        res.status(404).send("Error al enviar el correo")

    }
}
module.exports = {correo};