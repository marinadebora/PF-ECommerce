
const { transporter } = require('../controladores/controladorPostEmail');
const Router = require("express"); 
const router = Router();
const { body } = require('express-validator');
const { validacioncampos } = require('../middlewares/validador-de-campos')

router.post("/", 
body('contact_user','El nombre es obligatorio').notEmpty(),
body('correo_user','El correo es obligatorio').isEmail(),
body('asunto_user','El asunto es obligatorio').notEmpty(),
body('descripcion_user','la descripsion es obligatoria').notEmpty(),
validacioncampos, async (req, res) => {
    const {contact_user,correo_user, asunto_user,descripcion_user } = req.body;
  
    try {
        await transporter.sendMail({
            from: `"${contact_user}" <accesoriosnautica02@gmail.com>`, // sender address
            to: correo_user, // list of receivers
            subject: `${asunto_user} -> AccesoriosNautica`, // Subject line
            text: "", // plain text body,
            html:`<b>de: </b>${correo_user}
            <br></br>
            <p>${descripcion_user}</p>
            `
          });
          return res.json({
            ok: true,
        });
    } catch (error) {
        console.log(error);
        return res.json({
            ok: false,
        });
    }
});

module.exports = router;



// const correo = async (req,res = response)=>{
//     const {email,password,nombre,apellido} = req.body;
//     try {
//         await transporter.sendMail({
//             from: '"Fred Foo 👻" <accesoriosnautica02@gmail.com>', // sender address
//             to: email, // list of receivers
//             subject: "AccesoriosNautica", // Subject line
//             text: "", // plain text body
//             html: `"<b>De:accesoriosnautica02@gmail.com</b>"
//             <p> ${password}</p>
//             <p> ${nombre}</p>
//             <p> ${apellido}</p>
//             `, // html body
//           });
//           res.send("Correo Enviado")
//     } catch (error) {
//        res.status(404).send("Error al enviar el correo")
//     }
// }