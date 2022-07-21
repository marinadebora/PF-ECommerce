import axios from "axios"



export function postAccesorio(payload) {
    return async function (dispatch) {
      try {
        const accesoriosCreated = await axios.post(URL_POST_ACCESORIOS, payload);
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
        return axios.delete(`${URL}/${id}`)
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
        return axios.put(`${URL}/${id}`, payload)
        .then(data => {
            dispatch({
                type:"UPDATE_ACCESORIO",
                payload:data
            })
        })
    }
}
//---------------------EMBARCACION---------------------
//-----------------------------------------------------
  export function postEmbarcacion(payload) {
    return async function (dispatch) {
      try {
        const embarcacionCreated = await axios.post(URL_POST_EMBARCACION, payload);
        return dispatch({
          type: "POST_EMBARCACION",
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

export function deleteEmbarcacion(id){
    return function(dispatch){
        return axios.delete(`${URL}/${id}`)
        .then(data => {
            dispatch({
                type:"DELETE_EMBARCACION",
                payload:data
            })
        })
    }
}



export function updateEmbarcacion(id, payload){
    return function(dispatch){
        return axios.put(`${URL}/${id}`, payload)
        .then(data => {
            dispatch({
                type:"UPDATE_EMBARCACION",
                payload:data
            })
        })
    }
}