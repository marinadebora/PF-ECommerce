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
// const deleteEmbarcacionesVenta = require("./deleteEmbarcacionesVenta");
// const deleteEmbarcacionesRenta = require("./deleteEmbarcacionesRenta");
const { categorias } = require("../controladores/controladorCategorias");
//const { cargarVentas, cargarRenta, cargarAccesorios} = require("../controladores/CargaVentas");
const postCategorias = require("./postCategoria");
const { usuarios } = require("../controladores/controladorPostRegistro");
const { usuariosAuth } = require("../controladores/ControladorPostAutenticar");
const {correo}= require("../controladores/autenticar")
const cargarVentas = require("../controladores/CargaVentas");

const deleteCategoria = require("./deleteCategoria");
const {agregarAlCarrito, borrarCarrito, asignarUsuarioAlCarrito} = require("../controladores/controladorCarrito");
const { requireSignin } = require("../controladores/Verificaciones");

let router = Router();

router.use("/embarcacionesV", getEmbarVenta);
router.use("/embarcacionesVId", getEmbarVentaId);
router.use("/embarcacionesR", getEmbarRenta);
router.use("/embarcacionesRId", getEmbarRentaId);
router.use("/accesorios",/* requireSignin, */ getAccesorios);
router.use("/accesorio", getAccesoriosId);
router.use("/todos", getTodo);
router.use("/todos", getTodoId);
router.use("/embarcacionesR",postEmbarcacionesRenta);
router.use("/embarcacionesV",postEmbarcacionesV);
router.use("/accesorio",postAccesorios);
router.use("/embarcacionesR", putEmbarcacionesRenta);
router.use("/accesorio", putAccesorios);
router.use("/embarcacionesV",putEmbarcacionesV);
router.use("/embarcacionesV",deleteEmbarcacionesVenta);
router.use("/embarcacionesR",deleteEmbarcacionesRenta);
router.use("/accesorio",deleteAccesorios);
router.post("/registro",usuarios,correo);
router.post("/autenticar",usuariosAuth); 
router.get("/categorias", categorias);
router.use("/categorias", postCategorias);
router.use('/correo', correo);
router.post("/registro",usuarios);
router.post("/carrito/:id", agregarAlCarrito);
router.delete("/carrito",borrarCarrito)
router.use("/embrarcacionesV",postEmbarcacionesV)
router.use("/embrarcacionesV",putEmbarcacionesVenta)
router.use("/embarcacionesR", postEmbarcacionesRenta)
router.use("/accesorios", getAccesorios)
router.use("/accesorios", postAccesorios)
router.use("/accesorio", deleteAccesorios)
router.use("/todo", getTodoId)
router.use("/categorias", deleteCategoria)


// no ejecutar esta ruta para no replicar los documentos de la base de datos
// router.use("/a", cargarVentas)
// router.use("/b", cargarRenta)
// router.use("/c", cargarAccesorios)
//router.use("/cargarVenta", cargarVentas)




module.exports = router;
