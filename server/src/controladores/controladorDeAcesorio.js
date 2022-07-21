const api = require('../resources/products.json');
const EmvarcacionesVenta = require('../modelos/EmbarcacionesVenta')

const getAccesorios = async (req,res)=>{
    try {
        /* const mode = await EmvarcacionesVenta.find() */
        const datos = api
        const resultado = datos.accessories.map(e=>{
            return{
                producto: e.producto,
                categorias: e.categorias,
                imagenes: e.imagenes,
                stock: e.stock,
                descripcion: e.descripcion,
                dimensiones: e.dimensiones,
                precio: e.precio
            }
        })
    return resultado
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    getAccesorios
}