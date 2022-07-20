const {Router} = require("express");
const  {getEmbarcacionesV} = require("../controladores/ControladorEmbarcacionesVenta") ;

let router = Router();

router.get("/",getEmbarcacionesV)

module.exports= router;