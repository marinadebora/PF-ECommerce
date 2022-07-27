 const initialState = {
    products: [],
    allProducts:[],
    saleVessels: [],
    rentVessels: [],
    accesories: [],
    allAccesories:[],
    detail: {},
<<<<<<< HEAD
    categorias: [],
    basket: [],
  
  };
  
  function rootReducer(state = initialState, action)
  {
  
    switch (action.type) {
  
      case 'TODOS_LOS_PRODUCTOS':
        return {
          ...state,
          products: action.payload,
          allProducts:action.payload,
          detail:{}
        }
      case 'PRODUCTOS_DETAIL':
  console.log(action.payload)
        return {
          ...state,
          detail: action.payload,
          basket:action.payload
        }
  
      case 'BARCOS_EN_VENTA':
        return {
          ...state,
          saleVessels: action.payload,
        }
  
      case 'BARCOS_EN_ALQUILER':
        return {
          ...state,
          rentVessels: action.payload,
        }
  
      case 'ACCESORIOS':
        return {
          ...state,
          accesories: action.payload,
          allAccesories: action.payload,
        }
  
      case 'PRODUCT_NAME':
        return {
          ...state,
          products: action.payload
        }
  
      case 'TODAS_CATEGORIAS':
        return {
          ...state,
          categories: action.payload
        }

       case 'ADD_TO_BASKET':
          const cart_add = state.products.find(e => e._id === action.payload) 
         
          return{
            ...state,
            basket: [...state.basket,cart_add]
          } 
  
          case 'REMOVE_TO_BASKET':
            const cart_remove = state.basket.filter(e => e!==undefined&& e._id !== action.payload)
    
            return{
              ...state,
              basket: cart_remove
            }
    
        //----------filtros----------//
  
      case 'FITRO_PRECIO':
        const estado = state.saleVessels
        const precios = estado.filter(e => e.precio.split(' '))
        const filterPrecio = action.payload === 'medio' ?
          precios.filter(e => parseInt(e.precio) > 150000 && parseInt(e.precio) < 300000) :
          precios.filter(e => parseInt(e.precio) < 150000)
  
        return {
          ...state,
          saleVessels: action.payload === 'mayor' ? precios.filter(e => parseInt(e.precio) > 300000) : filterPrecio
        }
  
      case 'FITRO_PRECIO_ACCESORIO':
        const estadoAcc = state.accesories
        const precioAcc = estadoAcc.filter(e => e.precio.split('$')[1])
        const filterPrecioAcc = action.payload === 'medio' ?
          precioAcc.filter(e => parseInt(e.precio.split('$')[1]) > 50 && parseInt(e.precio.split('$')[1]) < 100) :
          precioAcc.filter(e => parseInt(e.precio.split('$')[1]) < 50)
  
        return {
          ...state,
          accesories: action.payload === 'mayor' ? precioAcc.filter(e => parseInt(e.precio.split('$')[1]) > 100) : filterPrecioAcc
        }
  
      case 'FITRO_CATEGORIA_ACCESORIO':
        const allAcc = state.accesories
        const categoria = action.payload === 'seguridad' ? allAcc.filter(e => e.categorias.find(e => e === action.payload)) :
          allAcc.filter(e => e.categorias.find(e => e === action.payload))
        return {
          ...state,
          accesories: action.payload === 'electronica' ? allAcc.filter(e => e.categorias.find(e => e === action.payload)) : categoria
        }
  
      case 'FITRO_CATEGORIA_EMBARCACION':
        const allrent = state.rentVessels
        const allvent = state.saleVessels
  
        const categoriaR = action.payload === 'Alta' ? allrent.filter(e => e.categorias.find(e => (e.split(' ')[1]) === action.payload)) :
        action.payload === 'Media' && allrent.filter(e => e.categorias.find(e => (e.split(' ')[1]) === action.payload))
  
        const categoriaV = action.payload === 'Alta' ? allvent.filter(e => e.categorias.find(e => (e.split(' ')[1]) === action.payload)) :
        action.payload === 'media' && allvent.filter(e => e.categorias.find(e => (e.split(' ')[1]) === action.payload))
  
        return {
          ...state,
          saleVessels: action.payload === 'baja' ? allvent.filter(e => e.categorias.find(e => (e.split(' ')[1]) === action.payload)) : categoriaV,
          rentVessels: action.payload === 'Economica' ? allrent.filter(e => e.categorias.find(e => (e.split(' ')[1]) === action.payload)) : categoriaR
        }
      
  
      case 'FILTRO_CATEGORIAS':
        const productos = state.allProducts
        const filtroCateg = productos.filter(e => e.categorias.find(e => e.toLowerCase() === action.payload.toLowerCase()))
  
        return {
          ...state,
          products: filtroCateg
        }
  
      case 'PRECIO_ORDEN':
          const stateOrder = state.saleVessels
          const order = action.payload === 'max' ?
            stateOrder.sort(function (a, b)
            {
              return parseInt(b.precio) - parseInt(a.precio)
            })
            : stateOrder.sort(function (a, b)
            {
              return parseInt(a.precio) - parseInt(b.precio)
            })
    
        return {
            ...state,
            saleVessels: order
          }
        
        case 'PRECIO_ORDEN_ACCESORIOS':
          const stateOrden=state.accesories
          const orden = action.payload === 'max' ?
            stateOrden.sort(function (a, b)
            {
              return parseInt(b.precio.split('$')[1]) - parseInt(a.precio.split('$')[1])
            })
            : stateOrden.sort(function (a, b)
            {
              return parseInt(a.precio.split('$')[1]) - parseInt(b.precio.split('$')[1])
            })
          return{
            ...state,
            accesories:orden
          }
          case 'CATEGORIAS':
            return {
              ...state,
              categorias: action.payload,
            }
          case "POST_CATEGORIAS":   
            return { ...state, categorias: state.categorias.concat(action.payload) };
=======
    categories: [],
    basket: [],
  
  };
  
  function rootReducer(state = initialState, action)
  {
  
    switch (action.type) {
  
      case 'TODOS_LOS_PRODUCTOS':
        return {
          ...state,
          products: action.payload,
          allProducts:action.payload,
          detail:{}
        }
      case 'PRODUCTOS_DETAIL':
 
        return {
          ...state,
          detail: action.payload,
         
        }
  
      case 'BARCOS_EN_VENTA':
        return {
          ...state,
          saleVessels: action.payload,
        }
  
      case 'BARCOS_EN_ALQUILER':
        return {
          ...state,
          rentVessels: action.payload,
        }
  
      case 'ACCESORIOS':
        return {
          ...state,
          accesories: action.payload,
          allAccesories: action.payload,
        }
  
      case 'PRODUCT_NAME':
        return {
          ...state,
          products: action.payload
        }
  
      case 'TODAS_CATEGORIAS':
        return {
          ...state,
          categories: action.payload
        }

       case 'ADD_TO_BASKET':
          const cart_add = state.products.find(e => e._id === action.payload) 
        
      
          return{
            ...state,
            basket:Array.isArray(state.basket)?[...state.basket,cart_add]:[state.basket,cart_add]
          } 
  
          case 'REMOVE_TO_BASKET':
            const cart_remove = state.basket?.filter(e => e!==undefined&& e!==null&&e._id !== action.payload)
           
            return{
              ...state,
              basket: cart_remove
            }
    
        //----------filtros----------//
  
      case 'FITRO_PRECIO':
        const estado = state.saleVessels
        const precios = estado.filter(e => e.precio.split(' '))
        const filterPrecio = action.payload === 'medio' ?
          precios.filter(e => parseInt(e.precio) > 150000 && parseInt(e.precio) < 300000) :
          precios.filter(e => parseInt(e.precio) < 150000)
  
        return {
          ...state,
          saleVessels: action.payload === 'mayor' ? precios.filter(e => parseInt(e.precio) > 300000) : filterPrecio
        }
  
      case 'FITRO_PRECIO_ACCESORIO':
        const estadoAcc = state.accesories
        const precioAcc = estadoAcc.filter(e => e.precio.split('$')[1])
        const filterPrecioAcc = action.payload === 'medio' ?
          precioAcc.filter(e => parseInt(e.precio.split('$')[1]) > 50 && parseInt(e.precio.split('$')[1]) < 100) :
          precioAcc.filter(e => parseInt(e.precio.split('$')[1]) < 50)
  
        return {
          ...state,
          accesories: action.payload === 'mayor' ? precioAcc.filter(e => parseInt(e.precio.split('$')[1]) > 100) : filterPrecioAcc
        }
  
      case 'FITRO_CATEGORIA_ACCESORIO':
        const allAcc = state.accesories
        const categoria = action.payload === 'seguridad' ? allAcc.filter(e => e.categorias.find(e => e === action.payload)) :
          allAcc.filter(e => e.categorias.find(e => e === action.payload))
        return {
          ...state,
          accesories: action.payload === 'electronica' ? allAcc.filter(e => e.categorias.find(e => e === action.payload)) : categoria
        }
  
      case 'FITRO_CATEGORIA_EMBARCACION':
        const allrent = state.rentVessels
        const allvent = state.saleVessels
  
        const categoriaR = action.payload === 'Alta' ? allrent.filter(e => e.categorias.find(e => (e.split(' ')[1]) === action.payload)) :
        action.payload === 'Media' && allrent.filter(e => e.categorias.find(e => (e.split(' ')[1]) === action.payload))
  
        const categoriaV = action.payload === 'Alta' ? allvent.filter(e => e.categorias.find(e => (e.split(' ')[1]) === action.payload)) :
        action.payload === 'media' && allvent.filter(e => e.categorias.find(e => (e.split(' ')[1]) === action.payload))
  
        return {
          ...state,
          saleVessels: action.payload === 'baja' ? allvent.filter(e => e.categorias.find(e => (e.split(' ')[1]) === action.payload)) : categoriaV,
          rentVessels: action.payload === 'Economica' ? allrent.filter(e => e.categorias.find(e => (e.split(' ')[1]) === action.payload)) : categoriaR
        }
      
  
      case 'FILTRO_CATEGORIAS':
        const productos = state.allProducts
        const filtroCateg = productos.filter(e => e.categorias.find(e => e.toLowerCase() === action.payload.toLowerCase()))
  
        return {
          ...state,
          products: filtroCateg
        }
  
      case 'PRECIO_ORDEN':
          const stateOrder = state.saleVessels
          const order = action.payload === 'max' ?
            stateOrder.sort(function (a, b)
            {
              return parseInt(b.precio) - parseInt(a.precio)
            })
            : stateOrder.sort(function (a, b)
            {
              return parseInt(a.precio) - parseInt(b.precio)
            })
    
        return {
            ...state,
            saleVessels: order
          }
        
        case 'PRECIO_ORDEN_ACCESORIOS':
          const stateOrden=state.accesories
          const orden = action.payload === 'max' ?
            stateOrden.sort(function (a, b)
            {
              return parseInt(b.precio.split('$')[1]) - parseInt(a.precio.split('$')[1])
            })
            : stateOrden.sort(function (a, b)
            {
              return parseInt(a.precio.split('$')[1]) - parseInt(b.precio.split('$')[1])
            })
          return{
            ...state,
            accesories:orden
          }
>>>>>>> debora/carrito
  
      default: {
        return state
      }
    }
  }
  
  export default rootReducer;
