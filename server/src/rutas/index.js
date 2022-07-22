const {Router} = require("express");
const getEmbarVenta = require("./getEmbarcacionesVenta");
const getEmbarRenta = require("./getEmbarcacionesRenta");
const getAccesorios = require("./getAccesorios");
const getAccesoriosId = require("./getAccesoriosId");
const getEmbarVentaId = require("./getEmbarcacionesVentaid");
const getEmbarRentaId = require("./getEmbarcacionesRentaId");
const getTodo = require("./getTodo");
const getTodoId = require("./getTodoId");
const postAccesorios = require("./postAccesorios");
const putAccesorios = require("./putAccesorios");
const putEmbarcacionesRenta = require("./putEmbarcacionesRenta");
const postEmbarcacionesRenta = require("./postEmbarcacionesRenta");

let router = Router();

router.use("/embarcacionesv", getEmbarVenta)
router.use("/embarcacionesvId", getEmbarVentaId)
router.use("/embarcacionesr", getEmbarRenta)
router.use("/embarcacionesr", postEmbarcacionesRenta)
router.use("/embarcacionesr", putEmbarcacionesRenta)
router.use("/embarcacionesrId", getEmbarRentaId)
router.use("/accesorios", getAccesorios)
router.use("/accesorios", postAccesorios)
router.use("/accesorio", getAccesoriosId)
router.use("/accesorio", putAccesorios)
router.use("/todos", getTodo)
router.use("/todo", getTodoId)

module.exports= router;