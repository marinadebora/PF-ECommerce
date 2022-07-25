const {Router} = require('express')
const EmbarcacionesVenta = require('../modelos/EmbarcacionesVenta')
const { getEmbarcacionesV } = require('./ControladorEmbarcacionesVenta')

const cargarVentas = Router()

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


module.exports = cargarVentas