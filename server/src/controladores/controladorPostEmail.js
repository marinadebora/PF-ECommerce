const {CORREO_SECRET,GOOGLE_SECRET} = process.env
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
   host: "smtp.gmail.com",
   port: 465,
   secure: true, 
   auth: {
    user: 'accesoriosnautica02@gmail.com', 
    pass: 'yrbvrnyorfgfchwh',
  },
   tls: {
       rejectUnauthorized: false
   }
 });

 transporter.verify().then(()=>{ 
 console.log('email enviado con exito');
}).catch((err)=>{
   console.log(err)
});
module.exports ={
    transporter
}

// const {CORREO_SECRET,GOOGLE_SECRET} = process.env
// const nodemailer = require("nodemailer");

// let transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true, // true for 465, false for other ports
//     auth: {
//       user: CORREO_SECRET, // generated ethereal user
//       pass: GOOGLE_SECRET, // generated ethereal password
//     },
//     tls:{
//       rejectUnauthorized:false
//     }
//   });



// module.exports= {transporter}