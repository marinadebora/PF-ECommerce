const {Router} = require("express");

const getEmbarVenta = require("./getEmbarcacionesVenta");
const getEmbarRenta = require("./getEmbarcacionesRenta");
const getAccesorios = require("./getAccesorios");

let router = Router();

router.use("/embarcacionesv", getEmbarVenta)
router.use("/embarcacionesr", getEmbarRenta)
router.use("/accesorios", getAccesorios)
/* router.use("/a", getEmbarVenta) */
/* router.use("/b", getEmbarVentas) */

module.exports= router;