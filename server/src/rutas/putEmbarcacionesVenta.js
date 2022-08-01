const { Router } = require('express');
const EmbarcacionesVenta = require('../modelos/EmbarcacionesVenta');

const putEmbarcacionesV = Router()

putEmbarcacionesV.put("/:id", async (req,res) =>{
    const {id} = req.params
    const { tipo,categorias,modelo,precio,astillero,
        fabricacion,localizacion,imagenes,
        numero_de_pasajeros,eslora,manga,calado,
        numero_de_motores,marca_de_motor,potencia_total,
        descripcion,combustible } = req.body;

    try {
        if( id.length !== 24 )res.status(404).send("hay un error en el ID")
        const acc = await EmbarcacionesVenta.findOneAndUpdate({_id: id},
            {
                tipo:tipo,
                categorias:categorias,
                modelo:modelo,
                precio:precio,
                astillero:astillero,
                fabricacion:fabricacion,
                localizacion:localizacion,
                imagenes:imagenes,
                numero_de_pasajeros:numero_de_pasajeros,
                eslora:eslora,
                manga:manga,
                calado:calado,
                numero_de_motores:numero_de_motores,
                marca_de_motor:marca_de_motor,
                potencia_total:potencia_total,
                descripcion:descripcion,
                combustible:combustible}
        )
        acc?
        res.status(200).send(`El vehiculo ${tipo} modelo ${modelo}, se ha actualizado`):
        res.status(404).send(`El vehiculo ${tipo} modelo ${modelo}, no se pudo actualizar`)
    
    }catch (error) {
        console.log(error)
    }
})

module.exports = putEmbarcacionesV
