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
<<<<<<< HEAD
const putEmbarcacionesVenta = require("./putEmbarcacionesVenta");
const putAccesorio = require("./putAccesorios");
const deleteEmbarcacionesRenta = require("./deleteEmbarcacionesRenta");
const deleteEmbarcacionesVenta=require("./deleteEmbarcacionesVenta");
const { categorias } = require("../controladores/controladorCategorias");
const postCategorias = require("./postCategorias")

let router = Router();

router.use("/embarcacionesv", getEmbarVenta)
router.use("/embarcacionesr", getEmbarRenta)
router.use("/accesorios", getAccesorios)
router.use("/todos", getTodo)

router.use("/categorias",categorias)

router.use("/embarcacionesvId", getEmbarVentaId)
router.use("/embarcacionesrId", getEmbarRentaId)
router.use("/accesorio", getAccesoriosId)
router.use("/todo", getTodoId)

router.use("/embarcacionesR",postEmbarcacionesRenta)
router.use("/embrarcacionesV",postEmbarcacionesV)
router.use("/accesorio",postAccesorios)
router.use("/categorias", postCategorias)

router.use("/embarcacionesR",putEmbarcacionesRenta)
router.use("/embrarcacionesV",putEmbarcacionesVenta)
router.use("/accesorio",putAccesorio)
=======
const putAccesorios = require("./putAccesorios");
const putEmbarcacionesV = require("./putEmbarcacionesVenta");
const deleteEmbarcacionesVenta = require("./deleteEmbarcacionesVentas");
const deleteEmbarcacionesRenta = require("./deleteEmbarcacionesRentas");
const deleteAccesorios = require("./deleteAccesorios");
const { usuarios } = require("../controladores/controladorPostRegistro");
const { usuariosAuth } = require("../controladores/ControladorPostAutenticar");


let router = Router();

router.use("/embarcacionesV", getEmbarVenta);
router.use("/embarcacionesVId", getEmbarVentaId);
router.use("//embarcacionesR", getEmbarRenta);
router.use("/embarcacionesRId", getEmbarRentaId);
router.use("/accesorios", getAccesorios);
router.use("/accesorio", getAccesoriosId);
router.use("/todos", getTodo);
router.use("/todos", getTodoId);
router.use("/embarcacionesR",postEmbarcacionesRenta);
router.use("/embarcacionesV",postEmbarcacionesV);
router.use("/accesorio",postAccesorios);
router.use("//embarcacionesR", putEmbarcacionesRenta);
router.use("/accesorio", putAccesorios);
router.use("/embarcacionesV",putEmbarcacionesV);
router.use("/embarcacionesV",deleteEmbarcacionesVenta);
router.use("/embarcacionesR",deleteEmbarcacionesRenta);
router.use("/accesorio",deleteAccesorios);
router.post("/registro",usuarios);
router.post("/autenticar",usuariosAuth);
>>>>>>> 06f193a091c8dea6339d1cf41688b677be7b4fd1

router.use("/embarcacionesR",deleteEmbarcacionesRenta)
router.use("/embarcacionesV",deleteEmbarcacionesVenta)


module.exports = router;
