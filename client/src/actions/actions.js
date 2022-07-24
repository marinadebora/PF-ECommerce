import axios from 'axios';

import infoProductos from '../infoPrueba/index'


export function todosLosProductos()
{
    return async function (dispatch)
    {
        try {
            const productos =await axios(`http://localHost:4000/todos`)
           
            return dispatch({

                type: "TODOS_LOS_PRODUCTOS",
                payload: productos.data

            })
        } catch (error) {
            console.log(error)
        }

    }
}

export function productosDetail(id)
{
    return async function (dispatch)
    {
        try {
           const proDetail =await axios(`http://localhost:4000/todo/${id}`)
          
            return dispatch({
                type: 'PRODUCTOS_DETAIL',
                payload: proDetail.data
            })
        } catch (error) {
            console.log(error)
        }

    }

}


      
export function barcosEnVenta(){
    return async function(dispatch){
        try {
            
            const prodVenta= await axios('http://localhost:4000/embarcacionesv')
            return dispatch({
                type:'BARCOS_EN_VENTA',
                payload:prodVenta.data
            })
        } catch (error) {
           console.log(error) 
        }
    }
}
export function barcosEnAlquiler(){
    return async function(dispatch){
        try {
            
            const prodVenta= await axios('http://localHost:4000/embarcacionesr');
            return dispatch({
                type:'BARCOS_EN_ALQUILER',
                payload:prodVenta.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}
export function accesorios(){
    return async function(dispatch){
        try {
            
            const prodVenta= await axios('http://localHost:4000/accesorios')
            return dispatch({
                type:'ACCESORIOS',
                payload:prodVenta.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}
export function categoriaAccesorios(payload){
    return {
        type:'CATEGORIA_ACCESORIOS',
        payload
    }
    }

//------------Filtro-Por-Precio------------//

export function filtroPrecio(payload){
return {
    type:'FITRO_PRECIO',
    payload
}
}


export function filtroPrecioAccesorios(payload){
    return {
        type:'FITRO_PRECIO_ACCESORIO',
        payload
    }
}

export function filtroCategoriaAccesorios(payload){
    return {
        type:'FITRO_CATEGORIA_ACCESORIO',
        payload
    }
}

export function filtrosCategoriaEmbarcacion(payload){
    return {
        type:'FITRO_CATEGORIA_EMBARCACION',
        payload
    }
}

//-------------Orden-------------//
export function precioOrden(payload){
    return {
        type:'PRECIO_ORDEN',
        payload
    }
    }

    export function precioOrdenAccesorios(payload){
        return {
            type:'PRECIO_ORDEN_ACCESORIOS',
            payload
        }
        }







export function todasCategorias(){
     return async function(dispatch){
            try {
                
                const prodCat=await axios('http://localhost:4000/categorias')
                
                return dispatch({
                    type:'TODAS_CATEGORIAS',
                    payload:prodCat.data
                })
            } catch (error) {
                console.log(error)
            }
        }
    
}

export function filtroCatgorias(payload){
    return {
        type:'FILTRO_CATEGORIAS',
        payload,
    }
}

export function productName(payload){

    return async function(dispatch){
     try {
        const name= await axios(`http://localhost:4000/todos?name=${payload}`)//http://localhost:4000/todos?name=chaleco
        console.log(name.data)
        return dispatch({
          type:'PRODUCT_NAME',
          payload:name.data[0]
        })
     } catch (error) {
        console.log(error)
     }
    }
  
  }