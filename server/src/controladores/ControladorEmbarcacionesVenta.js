const api =require('../resources/products.json')

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
                numero_de_pasajeros:resultado.numero_de_pasajeros,
                eslora:resultado.eslora,
                manga:resultado.manga,
                calado:resultado.calado,
                numero_de_motores:resultado.numero_de_motores,
                marca_de_motor:resultado.marca_de_motor,
                potencia_total:resultado.potencia_total,
                descripcion:resultado.descripcion,
                combustible:resultado.combustible
            }
        })
        
        return jsonMap;
        }catch(error){
            console.log(error)
        }
    }
    module.exports= {
        getEmbarcacionesV
    }