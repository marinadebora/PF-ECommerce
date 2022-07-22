


const initialState = {

  products: [],
  saleVessels: [],
  allsaleVessels:[],
  rentVessels: [],
  accesories: [],
  allaccesories:[],
  detail: []
};

function rootReducer(state = initialState, action)
{

  switch (action.type) {

    case 'TODOS_LOS_PRODUCTOS':
      return {
        ...state,
        products: action.payload,

      }
    case 'PRODUCTOS_DETAIL':

      return {
        ...state,
        detail: action.payload
      }

    default: {
      return state
    }
    case 'BARCOS_EN_VENTA':
      return {
        ...state,
        saleVessels: action.payload,
        allsaleVessels:action.payload,
      }
    case 'BARCOS_EN_ALQUILER':
      return {
        ...state,
        rentVessels: action.payload
      }
    case 'ACCESORIOS':
      return {
        ...state,
        accesories: action.payload,
        allaccesories: action.payload,
      }
      case 'FITRO_PRECIO':
        const estado=state.allsaleVessels
        const precios= estado.filter(e=>e.precio.split(' '))
        const filterPrecio= action.payload=== 'medio'?
        precios.filter(e=>parseInt(e.precio)>150000&&parseInt(e.precio)<300000):
        precios.filter(e=>parseInt(e.precio)<150000)
        
        return{
          ...state,
          saleVessels:action.payload=== 'mayor'? precios.filter(e=>parseInt(e.precio)>300000):filterPrecio

        }
        case 'FITRO_PRECIO_ACCESORIO':
          const estadoAcc=state.allaccesories
          const precioAcc= estadoAcc.filter(e=>e.precio.split(' ')[1])
          const filterPrecioAcc= action.payload=== 'medio'?
          precioAcc.filter(e=>parseInt(e.precio.split(' ')[1])>50&&parseInt(e.precio.split(' ')[1])<100):
          precioAcc.filter(e=>parseInt(e.precio.split(' ')[1])<50)
         
          return{
            ...state,
            accesories:action.payload=== 'mayor'? precioAcc.filter(e=>parseInt(e.precio.split(' ')[1])>100):filterPrecioAcc
  
          }
        case 'FITRO_CATEGORIA_ACCESORIO':
          const allAcc=state.allaccesories
          const categoria= action.payload==='seguridad'?allAcc.filter(e=>e.tipo===action.payload):
          action.payload==='electronica'?allAcc.filter(e=>e.tipo===action.payload):allAcc.filter(e=>e.tipo===action.payload)
          return{
            ...state,
            accesories:categoria
          }
      case 'PRECIO_ORDEN':
        const stateOrder=state.allsaleVessels
        const order=action.payload === 'max' ?
            stateOrder.sort(function (a, b)
                {

                    return parseInt(b.precio) - parseInt(a.precio)


                })
                : ''

        const minimo=order.reverse()
        return{
          ...state,
          saleVessels:order
        }
  }
}

export default rootReducer;