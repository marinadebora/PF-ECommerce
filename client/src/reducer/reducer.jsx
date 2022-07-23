const initialState={

    products: [],
    saleVessels: [],
    rentVessels: [],
    accesories: [],
    detail:{}
};

function  rootReducer(state = initialState, action){

    switch(action.type){

    case 'TODOS_LOS_PRODUCTOS':
            return {
                ...state,
                products: action.payload,

    }
    case 'PRODUCTOS_DETAIL':
      return{
          ...state,
          detail:action.payload
    }
    //----------------------ACCESORIO----------------------
    //-----------------------------------------------------
    case "POST_ACCESORIO":   
    return { ...state, accesories: state.accesories.concat(action.payload) };

    case "DELETE_ACCESORIO":
      return {
         ...state
    }
    
    case "UPDATE_ACCESORIO":
       return {
          ...state
    }
     //----------------------EMBARCACION VENTA----------------------
     //-------------------------------------------------------------

    case "POST_EMBARCACIONENV":   
     return { ...state, saleVessels: state.saleVessels.concat(action.payload) };

    case "DELETE_EMBARCACIONENV":
      return {
         ...state
    }
    
    case "UPDATE_EMBARCACIONENV":
       return {
          ...state
    }
     //----------------------EMBARCACION RENTA----------------------
     //-------------------------------------------------------------
     case "POST_EMBARCACIONRT":   
     return { ...state, rentVessels: state.rentVessels.concat(action.payload) };

    case "DELETE_EMBARCACIONRT":
      return {
         ...state
    }
    
    case "UPDATE_EMBARCACIONRT":
       return {
          ...state
    }

    default:{
        return state
    }

}
}



export default rootReducer