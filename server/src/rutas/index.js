const {Router} = require("express");
const  {getEmbarcacionesV} = require("../controladores/ControladorEmbarcacionesVenta") ;

let router = Router();

router.get("/embarcacionesv",getEmbarcacionesV)

module.exports= router;