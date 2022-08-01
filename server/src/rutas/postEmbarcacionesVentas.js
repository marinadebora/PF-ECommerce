const { Router } = require('express');
const EmbarcacionesVenta = require('../modelos/EmbarcacionesVenta');

const postEmbarcacionesV = Router()

postEmbarcacionesV.post("/", async (req,res) =>{
    const { tipo,categorias,modelo,precio,astillero,
        fabricacion,localizacion,imagenes,
        numero_de_pasajeros,eslora,manga,calado,
        numero_de_motores,marca_de_motor,potencia_total,
        descripcion,combustible } = req.body;

    try {
        const t = await EmbarcacionesVenta.find({tipo: tipo})
        const m = await EmbarcacionesVenta.find({modelo: modelo})
        if(t.length && m.length){ res.status(404).send(`El vehiculo ${tipo} modelo ${modelo}, ya se encuetra en nuestro almacen`)}
        else{
        const acc = await EmbarcacionesVenta.create({
            tipo,categorias,modelo,precio,astillero,
            fabricacion,localizacion,imagenes,
            numero_de_pasajeros,eslora,manga,calado,
            numero_de_motores,marca_de_motor,potencia_total,
            descripcion,combustible
        })
        res.status(200).send(`El vehiculo ${tipo} modelo ${modelo}, ahora se encuetra en nuestro almacen`)}
    }catch (error) {
        console.log(error)
    }
})

module.exports = postEmbarcacionesV