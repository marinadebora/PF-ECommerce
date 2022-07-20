

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

    }
    case 'PRODUCTOS_DETAIL':
        
    return{
        ...state,
        detail:action.payload
    }

    default:{
        return state
    }
}
}

export default rootReducer;