const initialState = {
  products: [],
  saleVessels: [],
  rentVessels: [],
  accesories: [],
  detail: {},
  categories: [],

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
        allrent.filter(e => e.categorias.find(e => (e.split(' ')[1]) === action.payload))

      const categoriaV = action.payload === 'Alta' ? allvent.filter(e => e.categorias.find(e => (e.split(' ')[1]) === action.payload)) :
        allvent.filter(e => e.categorias.find(e => (e.split(' ')[1]) === action.payload))

      return {
        ...state,
        rentVessels: action.payload === 'Economica' ? allrent.filter(e => e.categorias.find(e => (e.split(' ')[1]) === action.payload)) : categoriaR,
        saleVessels: action.payload === 'Economica' ? allvent.filter(e => e.categorias.find(e => (e.split(' ')[1]) === action.payload)) : categoriaV
      }
    

    case 'FILTRO_CATEGORIAS':
      const productos = state.products
      const filtroCateg = productos.filter(e => e.categorias.find(e => e === action.payload))

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

    default: {
      return state
    }
  }
}

export default rootReducer;