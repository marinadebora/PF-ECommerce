import React,{ useEffect,useState }  from "react";
import { accesorios, filtroPrecioAccesorios, filtroCategoriaAccesorios,precioOrdenAccesorios } from '../actions/actions'
import { useDispatch } from "react-redux";

export function FiltrosAccesorios({setPage}) {
    const dispatch = useDispatch()
    const [, setOrdering] = useState('')
    const [venta, setVenta] = useState('')
    const [categorias, setCategorias] = useState('')
    const [orden, setOrden] = useState('')


<<<<<<< HEAD
=======

>>>>>>> 4ef4920affd3355bcdbd8720ee388694eaccb3c0
    useEffect(() =>
    {
      dispatch(accesorios())
    }, [dispatch])
  
  
  
    const filtroPorPrecio = (event) =>
    {
      event.preventDefault()
      if (event.target.value === 'sinFiltro') {
        dispatch(accesorios())
       setVenta(false)
       setCategorias(false)

        setPage(1)
        setOrdering(`Order ${event.target.value}`)
      } else {
        dispatch(filtroPrecioAccesorios(event.target.value))
        setVenta(true)
        setPage(1)
        setOrdering(`Order ${event.target.value}`)
      }
  
    }
  
  
    const filtroPorCategoria = (event) =>
    {
      event.preventDefault()
      if (event.target.value === 'sinFiltro') {
<<<<<<< HEAD
        dispatch(filtroCategoriaAccesorios(event.target.value))
=======
       
>>>>>>> 4ef4920affd3355bcdbd8720ee388694eaccb3c0
        setCategorias(false)
        setPage(1)
        setOrdering(`Order ${event.target.value}`)
      } else {
      dispatch(filtroCategoriaAccesorios(event.target.value))
      setCategorias(true)
      setPage(1)
      setOrdering(`Order ${event.target.value}`)
    }
  }
    const ordenPrecio = (event) =>
    {
      event.preventDefault()
    
      dispatch(precioOrdenAccesorios(event.target.value))
      setPage(1)
      setOrdering(`Order ${event.target.value}`)
    }
    
  return (
<div>
<<<<<<< HEAD
   <label key='Precio'>Filtrar por Precio </label>
  <select name="Precio" id="barcoVentaAcc" onChange={(e) => filtroPorPrecio(e)}>
    <option key={'sinFiltro'} value={'sinFiltro'}>Sin Filtros</option>
    <option key={'mayor'} value={'mayor'}>Mas de US$ 120 </option>
    <option key={'medio'} value={'medio'}>Entre US$ 45 - US$ 120 </option>
    <option key={'menor'} value={'menor'}>Menos de US$ 45</option>
  </select>
  {
        venta && <label key='venta'>Filtrar por Categoria</label>
  }
=======
   <label key='venta'>Filtrar por Precio </label>
  <select name="venta" id="barcoVentaAcc" onChange={(e) => filtroPorPrecio(e)}>
    <option key={'sinFiltro'} value={'sinFiltro'}>Sin Filtros</option>
    <option key={'mayor'} value={'mayor'}>Mas de US$ 100 </option>
    <option key={'medio'} value={'medio'}>Entre US$ 50 - US$ 100 </option>
    <option key={'menor'} value={'menor'}>Menos de US$ 50</option>
  </select>
  {
        venta && <label key='venta'>Filtrar por Categoria</label>
      }
>>>>>>> 4ef4920affd3355bcdbd8720ee388694eaccb3c0
      
      {
        venta &&
        <select name="categorias" id="categorias" onChange={(e) => filtroPorCategoria(e)}>
          <option key={'sinFiltro'} value={'sinFiltro'}>Sin Filtros</option>
          <option key={'seguridad'} value={'seguridad'}>Seguridad</option>
          <option key={'electronica'} value={'electronica'}>Electronica</option>
          <option key={'esparcimiento'} value={'esparcimiento'}>Recreativo</option>
        </select>
      }
       {
<<<<<<< HEAD
        categorias && <label key='orden'>Ordenar</label>
=======
        categorias && <label key='venta'>Ordenar</label>
>>>>>>> 4ef4920affd3355bcdbd8720ee388694eaccb3c0
       } 
        
      {
        categorias &&
        <select name="order" id="order" onChange={(e) => ordenPrecio(e)}>
          <option key={'max'} value={'max'}>Mayor Precio</option>
          <option key={'min'} value={'min'}>Menor Precio</option>
        </select>
      }
      <br /><br /><br /><br /><br />
  </div>);
};
