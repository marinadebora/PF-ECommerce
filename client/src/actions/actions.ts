import axios from 'axios';
import infoProductos from '../infoPrueba/index'


export default function todosLosProductos(){
    return async function (dispatch:any){
        const productos = infoProductos; // await axios(`http://localHost:3001/productos`)
        
        return dispatch({

            type: "TODOS_LOS_PRODUCTOS",
            payload: productos,

        })
    }  
}