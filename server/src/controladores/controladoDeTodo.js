const Accesorios = require('../modelos/Accesorios')
const EmbarcacionesVenta = require('../modelos/EmbarcacionesVenta')
const EmbarcacionesRenta = require('../modelos/EmbarcacionesRenta')

const getTodos = async (req,res)=>{
    const accesorios = await Accesorios.find()
    const venta = await EmbarcacionesVenta.find()
    const renta = await EmbarcacionesRenta.find()
    const rentaMasVenta = venta.concat(renta)
    const resultado = accesorios.concat(rentaMasVenta)
    /* console.log(resultado.length) */
    return resultado
}

module.exports = {
    getTodos
}