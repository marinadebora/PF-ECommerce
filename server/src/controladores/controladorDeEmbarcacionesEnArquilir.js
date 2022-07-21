const api = require('../resources/products.json');

const getEmbarcacionesEnRenta = async (req,res)=>{
    try {
        const datos = api
        const resultado = datos.renta.map(e=>{
            return{
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
        }
    })
    return resultado
    } catch (error) {
        console.error(error)
    }
    
}

module.exports = {
    getEmbarcacionesEnRenta
}