import axios from 'axios';


//const URL_BASE = "http://localhost:4000"
//import infoProductos from '../infoPrueba/index'


export function todosLosProductos()
{
    return async function (dispatch)
    {
        try {
            const productos =await axios(`/todos`)
           
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
           const proDetail =await axios(`/todo/${id}`)
          
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
            
            const prodVenta= await axios('/embarcacionesv')
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
            
            const prodVenta= await axios('/embarcacionesr');
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
            
            const prodVenta= await axios('/accesorios')
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

    export function addToBasket(payload){
        return{
                type:'ADD_TO_BASKET',
                payload
    
                } 
            }
    
    export function removeToBasket(payload){
        return{
                type:'REMOVE_TO_BASKET',
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
                
                const prodCat=await axios('/categorias')
                
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
        const name= await axios(`/todos?name=${payload}`)//http://localhost:4000/todos?name=chaleco
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

  

export function postAccesorio(payload) {
    return async function (dispatch) {
      try {
        const accesoriosCreated = await axios.post(`accesorios`, payload);
        return dispatch({
          type: "POST_ACCESORIOS",
          payload: accesoriosCreated,
        });
      } catch (error) {
        console.log(error.message);
        return alert(
          "Hubo un error al crear el Accesorio. "
        );
        
      }
    };
  }

  export function deleteAccesorio(id){
    return function(dispatch){
        return axios.delete(`/accesorio/${id}`)
        .then(data => {
            dispatch({
                type:"DELETE_ACCESORIO",
                payload:data
            })
        })
    }
}



export function updateAccesorio(id, payload){
    return function(dispatch){
        return axios.put(`/accesorio/${id}`, payload)
        .then(data => {
            dispatch({
                type:"UPDATE_ACCESORIO",
                payload:data
            })
        })
    }
}
//---------------------EMBARCACIONENV---------------------
//--------------------------------------------------------
  export function postEmbarcacionEnV(payload) {
    return async function (dispatch) {
      try {
        const embarcacionCreated = await axios.post(`/embrarcacionesV`, payload);
        return dispatch({
          type: "POST_EMBARCACIONENV",
          payload: embarcacionCreated,
        });
      } catch (error) {
        console.log(error.message);
        return alert(
          "Hubo un error al crear la embarcacion. "
        );
        
      }
    };
  }

export function deleteEmbarcacionEnV(id){
    return async function(dispatch){
        return axios.delete(`/embarcacionesV/${id}`) 
        .then(data => {
            dispatch({
                type:"DELETE_EMBARCACIONENV",
                payload:data
            })
        }).catch((error) => console.error("Error:", error))
    }
} 

/*export const deleteEmbarcacionEnV = (id) => (dispatch)=>{
  return fetch (`${URL_BASE}/embrarcacionesV/${id}`,{
    method:"DELETE",
 })
 .then((res)=>res.json())
 .then((json)=>dispatch({
  type:"DELETE_EMBARCACIONENV",
  payload:json
 }))
 .catch((error) => console.error("Error:", error))
 
}*/




export function updateEmbarcacionEnV(id, payload){
    return function(dispatch){
        return axios.put(`/embrarcacionesV/${id}`, payload)
        .then(data => {
            dispatch({
                type:"UPDATE_EMBARCACIONENV",
                payload:data
            })
        })
    }
}


//---------------------EMBARCACION RENTAS---------------------
//------------------------------------------------------------
export function postEmbarcacionRT(payload) {
  return async function (dispatch) {
    try {
      const embarcacionCreated = await axios.post(`/embarcacionesR`, payload);
      return dispatch({
        type: "POST_EMBARCACIONRT",
        payload: embarcacionCreated,
      });
    } catch (error) {
      console.log(error.message);
      return alert(
        "Hubo un error al crear la embarcacion. "
      );
      
    }
  };
}

export function deleteEmbarcacionRT(id){
  return function(dispatch){
      return axios.delete(`/embarcacionesR/${id}`)
      .then(data => {
          dispatch({
              type:"DELETE_EMBARCACIONRT",
              payload:data
          })
      })
  }
}



export function updateEmbarcacionRT(id, payload){
  return function(dispatch){
      return axios.put(`/embarcacionesR/${id}`, payload)
      .then(data => {
          dispatch({
              type:"UPDATE_EMBARCACIONRT",
              payload:data
          })
      })
  }
}