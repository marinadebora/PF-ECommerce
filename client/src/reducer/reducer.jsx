const initialState={

    products: [],
    saleVessels:[],
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
                detail:{}

    }
    case 'PRODUCTOS_DETAIL':
      return{
          ...state,
          detail:action.payload
    }
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

    case "POST_EMBARCACION":   
     return { ...state, products: state.products.concat(action.payload) };

    case "DELETE_EMBARCACION":
      return {
         ...state
    }
    
    case "UPDATE_EMBARCACION":
       return {
          ...state
    }

    default:{
        return state
    }

}
}



export default rootReducer