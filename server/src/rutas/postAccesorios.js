<<<<<<< HEAD
const { Router } = require('express');
const Accesorios = require('../modelos/Accesorios');

const postAccesorios = Router()

postAccesorios.post("/", async (req,res) =>{
    const { producto, categorias, imagenes, stock, descripcion, dimensiones, precio, rating, comentarios, valoraciones} = req.body;
    try {
        const Produc = await Accesorios.find({producto: producto})
        const Dimens = await Accesorios.find({dimensiones: dimensiones})
        if(Produc.length && Dimens.length){
            res.status(404).send(`El producto: ${producto}, ya se encuetra en nuestro almacen`)
        }else{
            const acc = await Accesorios.create({
            producto: producto,
            categorias: categorias,
            imagenes: imagenes,
            stock: stock,
            descripcion: descripcion,
            dimensiones: dimensiones,
            precio: precio,
            rating: rating,
            valoraciones: valoraciones,
            comentarios: comentarios

            })
            res.send(`El Accesorio: ${producto}, se creo correctamente`)
        }
    } catch (error) {
        console.log(error)
    }
})

=======
const { Router } = require('express');
const Accesorios = require('../modelos/Accesorios');

const postAccesorios = Router()

postAccesorios.post("/", async (req,res) =>{
    const { producto, categorias, imagenes, stock, descripcion, dimensiones, precio} = req.body;
    try {
        const Produc = await Accesorios.find({producto: producto})
        const Dimens = await Accesorios.find({dimensiones: dimensiones})
        if(Produc.length && Dimens.length){
            res.status(404).send(`El producto: ${producto}, ya se encuetra en nuestro almacen`)
        }else{
            const acc = await Accesorios.create({
            producto: producto,
            categorias: categorias,
            imagenes: imagenes,
            stock: stock,
            descripcion: descripcion,
            dimensiones: dimensiones,
            precio: precio
            })
            res.send(`El Accesorio: ${producto}, se creo correctamente`)
        }
    } catch (error) {
        console.log(error)
    }
})

>>>>>>> f4ce25ed315d5d7cdb681ca61547947209a15099
module.exports = postAccesorios