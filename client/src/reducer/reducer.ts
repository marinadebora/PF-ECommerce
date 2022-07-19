interface typeInicialState{
    products:string[],
    saleVessels:string[],
    rentVessels:string[],
    accesories:string[],
}

const initialState: typeInicialState = {

    products: [],
    saleVessels:[],
    rentVessels: [],
    accesories: [],

};

function  rootReducer(state: any = initialState, action: any){

    switch(action.type){

        case 'TODOS_LOS_PRODUCTOS':
            return {
                ...state,
                products: action.payload,

    }

    default:{
        return state
    }
}
}

export default rootReducer;