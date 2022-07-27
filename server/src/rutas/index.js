<<<<<<< HEAD
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
const putAccesorios = require("./putAccesorios");
const putEmbarcacionesV = require("./putEmbarcacionesVenta");
const deleteEmbarcacionesVenta = require("./deleteEmbarcacionesVentas");
const deleteEmbarcacionesRenta = require("./deleteEmbarcacionesRentas");
const deleteAccesorios = require("./deleteAccesorios");
const deleteEmbarcacionesVenta = require("./deleteEmbarcacionesVenta");
const deleteEmbarcacionesRenta = require("./deleteEmbarcacionesRenta");
const { categorias } = require("../controladores/controladorCategorias");
<<<<<<< HEAD
const cargarVentas = require("../controladores/CargaVentas");
const postCategorias = require("./postCategoria");
const deleteCategoria = require("./deleteCategoria");
=======
const { cargarVentas, cargarRenta, cargarAccesorios} = require("../controladores/CargaVentas");
const postCategorias = require("./postCategoria");
const { usuarios } = require("../controladores/controladorPostRegistro");
const { usuariosAuth } = require("../controladores/ControladorPostAutenticar");

>>>>>>> 77a56649ee0571111bb78f25599754a1f8142395

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

router.get("/categorias", categorias)
router.use("/categorias", postCategorias)


// no ejecutar esta ruta para no replicar los documentos de la base de datos
router.use("/a", cargarVentas)
router.use("/b", cargarRenta)
router.use("/c", cargarAccesorios)


router.get("/categorias", categorias)
router.use("/categorias", postCategorias)
router.use("/categorias", deleteCategoria)


// no ejecutar esta ruta para no replicar los documentos de la base de datos
router.use("/cargarVenta", cargarVentas)




=======
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


// no ejecutar esta ruta para no replicar los documentos de la base de datos
router.use("/cargarVenta", cargarVentas)




>>>>>>> debora/carrito
module.exports= router;