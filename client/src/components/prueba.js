import infoProductos from '../infoPrueba/index'


export default function filtrado(id){

    const a=infoProductos.filter(e => e._id===id) 
  
    return a
 }
 