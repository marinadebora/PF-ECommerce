const {Router} = require('express')
const EmbarcacionesVenta = require('../modelos/EmbarcacionesVenta')
const EmbarcacionesRenta = require('../modelos/EmbarcacionesRenta')
const Accesorios = require('../modelos/Accesorios')
const { getEmbarcacionesV } = require('./ControladorEmbarcacionesVenta')
const { getEmbarcacionesEnRenta } = require('./controladorDeEmbarcacionesEnArquilir')
const { getAccesorios } = require('./controladorDeAcesorio')

const cargarVentas = Router();
const cargarRenta = Router();
const cargarAccesorios = Router();

cargarVentas.get("/", async (req, res) =>{
    const api =  getEmbarcacionesV()
    const subir = api.map(e =>{
        const crear =  EmbarcacionesVenta.create({
        tipo: e.tipo,
        categorias: e.categorias,
        modelo: e.modelo,
        precio: e.precio,
        astillero: e.astillero,
        fabricacion: e.fabricacion,
        localizacion: e.localizacion,
        imagenes: e.imagenes,
        numero_de_pasajeros: e.numero_de_pasajeros,
        eslora: e.eslora,
        manga: e.manga,
        calado: e.calado,
        numero_de_motores: e.numero_de_motores,
        marca_de_motor: e.marca_de_motor,
        potencia_total: e.potencia_total,
        descripcion: e.descripcion,
        combustible: e.combustible
        })
        return crear
    })
    res.send(subir)
})

cargarRenta.get("/", async (req, res)=>{
    const api = await getEmbarcacionesEnRenta()
    const subir = api.map(e =>{
        const crear =  EmbarcacionesRenta.create({
            marca: e.marca,
            categorias: e.categorias,
            modelo:e.modelo,
            fabricacion: e.fabricacion,
            fabricacionDelMotor: e.fabricacionDelMotor,
            motor: e.motor,
            imagenes: e.imagenes,
            eslora: e.eslora,
            manga: e.manga,
            puntal: e.puntal,
            motorizacion: e.motorizacion,
            cantMotores: e.cantMotores,
            hp: e.hp,
            marcamotor: e.marcamotor,
            descripcion: e.descripcion,
            combustible: e.combustible,
            horas: e.horas,
            transmision: e.transmision
        })
        return crear
    })
    res.send(subir)
})

cargarAccesorios.get("/", async (req, res)=>{
    const api = await getAccesorios()
    const subir = api.map(e =>{
        const crear = Accesorios.create({
            producto: e.producto,
                categorias: e.categorias,
                imagenes: e.imagenes,
                stock: e.stock,
                descripcion: e.descripcion,
                dimensiones: e.dimensiones,
                precio: e.precio,
                valoracion: [e.valoracion],// ⭐5 , comentario, cristian
                rating: e.rating,
                comentarios: [e.comentarios]
        })
        return crear
    })
    res.send(subir)
})


module.exports = {
    cargarVentas,
    cargarRenta,
    cargarAccesorios
}
