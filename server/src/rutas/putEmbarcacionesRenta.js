const {Router} = require('express');
const EmbarcacionesRenta = require('../modelos/EmbarcacionesRenta')

const putEmbarcacionesRenta = Router()

putEmbarcacionesRenta.put("/:id", async (req,res)=>{
    const {id} = req.params
    const { marca, categorias,modelo, fabricacion, fabricacionDelMotor, motor, imagenes, eslora, manga, puntal, motorizacion, cantMotores, hp, marcamotor, descripcion, combustible, horas, transmision } = req.body;
    try {
        if(id.length !== 24) {
            res.status(404).send(`Rebise el id, porque tiene de mas o menos caracteres`)
        }else{
        const actualizar = await EmbarcacionesRenta.findOneAndUpdate({_id: id},{
            marca: marca,
            categorias: categorias,
            modelo: modelo,
            fabricacion: fabricacion,
            fabricacionDelMotor: fabricacionDelMotor,
            motor: motor,
            imagenes: imagenes,
            eslora: eslora,
            manga: manga,
            puntal: puntal,
            motorizacion: motorizacion,
            cantMotores: cantMotores,
            hp: hp,
            marcamotor: marcamotor,
            descripcion: descripcion,
            combustible: combustible,
            horas: horas,
            transmision: transmision
            })
            actualizar ?
            res.send(`Se acualizo el producto: ${marca}`) :
            res.status(404).send(`No se a podido actualizar ${marca}, porque hay problemas con el id: ${id}.`)
        }
    } catch (error) {
        console.log(error)
    }
})

module.exports = putEmbarcacionesRenta