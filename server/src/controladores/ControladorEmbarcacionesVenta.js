const axios =require("axios") ;
let api =require('../resources/products.json')

 const getEmbarcacionesV = (req,res)=>{
    try{
     
        let getjsondata =  api;
        
        let jsonMap = getjsondata.venta.map(resultado=>{
            return{
                tipo:resultado.tipo,
                categorias:resultado.categorias,
                modelo:resultado.modelo,
                precio:resultado.precio,
                astillero:resultado.astillero,
                fabricacion:resultado.fabricacion,
                localizacion:resultado.localizacion,
                imagenes:resultado.imagenes,
                numero_de_pasajero:resultado.numero_de_pasajero,
                eslora:resultado.eslora,
                manga:resultado.manga,
                calado:resultado.calado,
                numero_de_motores:resultado.numero_de_motores,
                marca_de_motores:resultado.marca_de_motores,
                potencia_total:resultado.potencia_total,
                descripcion:resultado.descripcion,
                combustible:resultado.combustible}
        })
        res.json(jsonMap);
    }catch(error){
        console.log(error)
    }
    }



    module.exports= {getEmbarcacionesV}