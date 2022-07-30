const {Router} = require("express");
const getEmbarVenta = require("./getEmbarcacionesVenta");
const getEmbarRenta = require("./getEmbarcacionesRenta");
const getAccesorios = require("./getAccesorios");
const getAccesoriosId = require("./getAccesoriosId");
const getEmbarVentaId = require("./getEmbarcacionesVentaid");
const getEmbarRentaId = require("./getEmbarcacionesRentaId");
const getTodo = require("./getTodo");
const getTodoId = require("./getTodoId");
const postEmbarcacionesRenta = require("./postEmbarcacionesRentas");
const postEmbarcacionesV = require("./postEmbarcacionesVentas");
const postAccesorios = require("./postAccesorios");
const putEmbarcacionesRenta = require("./putEmbarcacionesRenta");
const putEmbarcacionesVenta = require("./putEmbarcacionesVenta");
const putAccesorios = require("./putAccesorios");
const deleteAccesorios = require("./deleteAccesorios");
const deleteEmbarcacionesVenta = require("./deleteEmbarcacionesVenta");
const deleteEmbarcacionesRenta = require("./deleteEmbarcacionesRenta");
const { categorias } = require("../controladores/controladorCategorias");
const cargarVentas = require("../controladores/CargaVentas");
const postCategorias = require("./postCategoria");
const deleteCategoria = require("./deleteCategoria");

let router = Router();

router.use("/embarcacionesV", getEmbarVenta)
router.use("/embarcacionesVId", getEmbarVentaId)
router.use("/embrarcacionesV",postEmbarcacionesV)
router.use("/embarcacionesV",deleteEmbarcacionesVenta);
router.use("/embrarcacionesV",putEmbarcacionesVenta)
router.use("/embarcacionesR", getEmbarRenta)
router.use("/embarcacionesRId", getEmbarRentaId)
router.use("/embarcacionesR", postEmbarcacionesRenta)
router.use("/embarcacionesR", putEmbarcacionesRenta)
router.use("/embarcacionesR",deleteEmbarcacionesRenta)
router.use("/accesorios", getAccesorios)
router.use("/accesorio", getAccesoriosId)
router.use("/accesorios", postAccesorios)
router.use("/accesorio", putAccesorios)
router.use("/accesorio", deleteAccesorios)
router.use("/todos", getTodo)
router.use("/todo", getTodoId)

router.get("/categorias", categorias)
router.use("/categorias", postCategorias)
router.use("/categorias", deleteCategoria)


// no ejecutar esta ruta para no replicar los documentos de la base de datos
router.use("/cargarVenta", cargarVentas)




module.exports= router;