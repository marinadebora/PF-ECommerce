const {Router} = require('express');
const Accesorios = require('../modelos/Accesorios');

const putAccesorios = Router()

putAccesorios.put("/:id", async (req,res)=>{
    const {id} = req.params
    const { producto, categorias, imagenes, stock, descripcion, dimensiones, precio} = req.body;
    try {
        if(id.length !== 24) res.status(404).send(`Rebise el id, porque tiene de mas o menos caracteres`)
        const actualizar = await Accesorios.findOneAndUpdate({_id: id},{
            producto: producto,
            categorias: categorias,
            imagenes: imagenes,
            stock: stock,
            descripcion: descripcion,
            dimensiones: dimensiones,
            precio: precio
        })
        actualizar ?
        res.send(`Se acualizo el producto: ${producto}`):
        res.status(404).send(`No se encontro el Id de este producto ${producto}.`)
    } catch (error) {
        console.log(error)
    }
})

module.exports = putAccesorios