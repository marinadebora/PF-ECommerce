 const initialState = {
    products: [],
    allProducts:[],
    saleVessels: [],
    allSaleVessels:[],
    rentVessels: [],
    accesories: [],
    allRentVessels:[],
    allAccesories:[],
    filtroAccP:[],
    detail: {},
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
          allSaleVessels:action.payload,
        }
  
      case 'BARCOS_EN_ALQUILER':
        return {
          ...state,
          rentVessels: action.payload,
          allRentVessels: action.payload,
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
        const estado = state.allSaleVessels
        const precios = estado.filter(e => e.precio.split(' '))
        const filterPrecio = action.payload === 'medio' ?
          precios.filter(e => parseInt(e.precio) > 150000 && parseInt(e.precio) < 300000) :
          precios.filter(e => parseInt(e.precio) < 150000)
  
        return {
          ...state,
          saleVessels: action.payload === 'mayor' ? precios.filter(e => parseInt(e.precio) > 300000) : filterPrecio
        }
  
      case 'FITRO_PRECIO_ACCESORIO':
        const estadoAcc = state.allAccesories
        const precioAcc = estadoAcc.filter(e => e.precio.split('$')[1])
        const filterPrecioAcc = action.payload === 'medio' ?
          precioAcc.filter(e => parseInt(e.precio.split('$')[1]) > 50 && parseInt(e.precio.split('$')[1]) < 100) :
          precioAcc.filter(e => parseInt(e.precio.split('$')[1]) < 50)
  
        return {
          ...state,
          accesories: action.payload === 'mayor' ? precioAcc.filter(e => parseInt(e.precio.split('$')[1]) > 100) : filterPrecioAcc,
          filtroAccP:action.payload === 'mayor' ? precioAcc.filter(e => parseInt(e.precio.split('$')[1]) > 100) : filterPrecioAcc
        }
  
      case 'FITRO_CATEGORIA_ACCESORIO':
        const allAcc = state.filtroAccP
        const categoria = action.payload === 'seguridad' ? allAcc.filter(e => e.categorias.find(e => e === action.payload)) :
          allAcc.filter(e => e.categorias.find(e => e === action.payload))
        return {
          ...state,
          accesories: action.payload === 'electronica' ? allAcc.filter(e => e.categorias.find(e => e === action.payload)) : categoria,
          ordenAcc:action.payload === 'electronica' ? allAcc.filter(e => e.categorias.find(e => e === action.payload)) : categoria
        }
        case 'PRECIO_ORDEN_ACCESORIOS':
          const stateOrden=state.ordenAcc
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
       /*  let seguridad=[];
        let esparcimiento=[];
        let electronica=[];
        

        let allSeguridad=new Set();
        let allEsparcimiento=new Set();
        let allElectronica=new Set();
        state.accesories.map(e=>allSeguridad.add(e.categoria.filter(e=>e===action.payload)))
        allSeguridad.forEach(function (e) {
  
          seguridad.push(e);
  
        })
        state.accesories.map(e=>allEsparcimiento.add(e.categoria.filter(e=>e===action.payload)))
        allEsparcimiento.forEach(function (e) {
  
          esparcimiento.push(e);
  
        })
        state.accesories.map(e=>allElectronica.add(e.categoria.filter(e=>e===action.payload)))
        allElectronica.forEach(function (e) {
  
          electronica.push(e);
  
        })
        return {

        } */
  
      case 'FITRO_CATEGORIA_EMBARCACION':
        const allrent = state.allRentVessels
        const allvent = state.allSaleVessels
  
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
          const stateOrder = state.allSaleVessels
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
        
       /*  case 'PRECIO_ORDEN_ACCESORIOS':
          const stateOrden=state.allAccesories
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
          } */
  
      default: {
        return state
      }
    }
  }
  
  export default rootReducer;
