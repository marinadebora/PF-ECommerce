import axios from "axios"

const URL_BASE = "http://localhost:4000"

export function postAccesorio(payload) {
    return async function (dispatch) {
      try {
        const accesoriosCreated = await axios.post(`${URL_BASE}/accesorios`, payload);
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
        return axios.delete(`${URL_BASE}/accesorio/${id}`)
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
        return axios.put(`${URL_BASE}/accesorio/${id}`, payload)
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
        const embarcacionCreated = await axios.post(`${URL_BASE}/embrarcacionesV`, payload);
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
        return axios.delete(`${URL_BASE}/embarcacionesV/${id}`) 
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
        return axios.put(`${URL_BASE}/embrarcacionesV/${id}`, payload)
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
      const embarcacionCreated = await axios.post(`${URL_BASE}/embarcacionesR`, payload);
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
      return axios.delete(`${URL_BASE}/embarcacionesR/${id}`)
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
      return axios.put(`${URL_BASE}/embarcacionesR/${id}`, payload)
      .then(data => {
          dispatch({
              type:"UPDATE_EMBARCACIONRT",
              payload:data
          })
      })
  }
}
//---------------------CATEGORIAS---------------------
//----------------------------------------------------

export function  Categorias() {
  return async function (dispatch) {
    try {
      let jsonTypes = await axios.get(`${URL_BASE}/categorias`);
      console.log(jsonTypes.data);
      return dispatch({
        type: 'CATEGORIAS',
        payload: jsonTypes.data,
      });
    } catch (error) {
      console.log(error);
      return alert(
        "Algo salio mal al cargar los Types. Intenta de nuevo más tarde"
      );
    }
  };
}
export function postCategorias(payload) {
  return async function (dispatch) {
    try {
      const CatCreated = await axios.post(`${URL_BASE}/categorias`, payload);
      return dispatch({
        type: "POST_CATEGORIAS",
        payload: CatCreated,
      });
    } catch (error) {
      console.log(error.message);
      return alert(
        "Hubo un error al crear la Categoria. "
      );
      
    }
  };
}