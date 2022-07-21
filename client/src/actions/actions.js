import axios from 'axios';

import infoProductos from '../infoPrueba/index'


export function todosLosProductos()
{
    return async function (dispatch)
    {
        try {
            const productos = infoProductos; // await axios(`http://localHost:3001/productos`)

            return dispatch({

                type: "TODOS_LOS_PRODUCTOS",
                payload: productos//.data

            })
        } catch (error) {
            console.log(error)
        }

    }
}
function filtrado(id){
   return infoProductos.filter(e=>e.id==id) 
}

export function productosDetail(id)
{
    return async function (dispatch)
    {
        try {
           const proDetail = filtrado(id)  //await axios(`http://localHost:3001/productos${id}`)
           
            return dispatch({
                type: 'PRODUCTOS_DETAIL',
                payload: proDetail[0]
            })
        } catch (error) {
            console.log(error)
        }

    }

}