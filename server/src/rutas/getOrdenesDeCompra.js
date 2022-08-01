const {Router} = require("express");
const ordenesDeCompra = require("../modelos/OrdenCompra")

getOrdenes = Router()

getOrdenes.get("/", async (req, res)=>{
    const {_id} = req.query
    const ordenes = await ordenesDeCompra.find()
    try{
        if(_id){
        let busqueda = ordenes.filter( e => e._id === _id )
        busqueda.length? res.send(busqueda):res.status(404).send(`la orden de compra: ${_id} es erronea`)
        }else{
            res.send(ordenes)
        }
    }
    catch(error){
        console.log(error)
    }
})