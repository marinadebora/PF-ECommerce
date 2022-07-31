const { Router } = require('express');
const EmbarcacionesRenta = require('../modelos/EmbarcacionesRenta');

const postEmbarcacionesRenta = Router()

postEmbarcacionesRenta.post("/", async (req,res) =>{
    const {marca,categorias,modelo,fabricacion,fabricacionDelMotor,motor,imagenes,eslora,manga,puntal,cantMotores,hp,marcamotor,descripcion,combustible,horas,transmision,disponible,preciojornada,preciodia } = req.body;
    try {
        const nombre = await EmbarcacionesRenta.find({marca:marca})
        const model= await EmbarcacionesRenta.find({modelo:modelo})
        if(nombre.length && model){
            res.status(404).send(`El producto: ${marca}, ya se encuetra en nuestro almacen`)
        }else{
            const acc = await EmbarcacionesRenta.create({
            marca:marca,
            categorias: categorias,
            modelo:modelo,
            fabricacion:fabricacion,
            fabricacionDelMotor:fabricacionDelMotor,
            motor:motor,
            imagenes: imagenes,
            eslora:eslora,
            manga:manga,
            puntal:puntal,
            cantMotores:cantMotores,
            hp:hp,
            marcamotor:marcamotor,
            descripcion: descripcion,
            combustible:combustible,
            horas:horas,
            transmision:transmision,
            disponible:disponible,
            preciojornada:preciojornada,
            preciodia:preciodia,
        })
        res.send(`El Accesorio: ${marca}, se creo correctamente`)
        }
    } catch (error) {
        console.log(error)
    }
})

module.exports = postEmbarcacionesRenta