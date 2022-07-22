import axios from 'axios';

import infoProductos from '../infoPrueba/index'
import buscaId from '../components/prueba'

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
function filtrado(id){

   const a=infoProductos.filter(e => e._id==id) 
 
   return a
}

export function productosDetail(id)
{
    return async function (dispatch)
    {
        try {
           const proDetail =await axios(`http://localhost:4000/todo/${id}`)
           console.log(proDetail)
            return dispatch({
                type: 'PRODUCTOS_DETAIL',
                payload: proDetail.data
            })
        } catch (error) {
            console.log(error)
        }

    }

}

/*  export function productosDetail(_id){
    return async function(dispatch){ 
       return(
        fetch(`http://localhost:4000/todo/${_id}`)
       .then(response=>response.json())
        .then(data=> dispatch({
            type:'PRODUCTOS_DETAIL',
            payload:data
        }))
        .catch (error=>console.log(error)) 
            
       )} } */

      
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
            
            const prodVenta= await axios('http://localHost:3001/embarcacionesr');
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
            
            const prodVenta= await axios('http://localHost:3001/accesorios')
            return dispatch({
                type:'ACCESORIOS',
                payload:prodVenta.data
            })
        } catch (error) {
            console.log(error)
        }
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
//-------------Orden-------------//
export function precioOrden(payload){
    return {
        type:'PRECIO_ORDEN',
        payload
    }
    }
