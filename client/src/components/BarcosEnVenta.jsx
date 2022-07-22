import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { barcosEnVenta, filtroPrecio, precioOrden } from '../actions/actions'
import { Link } from 'react-router-dom';
import Paginado from "./Paginado";

export function BarcosEnVenta()
{
  const productVenta = useSelector(state => state.saleVessels)
  const dispatch = useDispatch()

  const [ordering, setOrdering] = useState('')
  const [page, setPage] = useState(1);
  const [characterPerPage, setCharacterPerPage] = useState(5);
  const index = page * characterPerPage;
  const endIndex = index - characterPerPage;
  const actualPage = productVenta?.slice(endIndex, index);

  const paginado = (numPage) =>
  {
    setPage(numPage)
  }
 
  useEffect(() =>
  {
    dispatch(barcosEnVenta())
  }, [dispatch])

  const filtroPorPrecio = (event) =>
  {
    event.preventDefault()
    if(event.target.value==='sinFiltro'){
      dispatch(barcosEnVenta())
    }else{
      dispatch(filtroPrecio(event.target.value))
      setPage(1)
      setOrdering(`Order ${event.target.value}`)
    }
 
  }
  const ordenPrecio = (event) =>
  {
    event.preventDefault()
    if(event.target.value==='sinFiltro'){
      dispatch(barcosEnVenta())
    }else{
      dispatch(precioOrden(event.target.value))
      setPage(1)
      setOrdering(`Order ${event.target.value}`)
    }
 
  }



  return (
    <div>
      <Link to='/home'>
        <button>VOLVER</button>
      </Link>
      <Paginado
        characterPerPage={characterPerPage}
        newState={productVenta.length}
        paginado={paginado}
      />
      <select name="venta" id="barcoVenta" onChange={(e) => filtroPorPrecio(e)}>
        <option key={'sinFiltro'} value={'sinFiltro'}>Sin Filtros</option>
        <option key={'mayor'} value={'mayor'}>Mas de US$ 300000 </option>
        <option key={'medio'} value={'medio'}>Entre US$ 150000 - US$ 300000 </option>
        <option key={'menor'} value={'menor'}>Menos de US$ 150000</option>
      </select>
      <select name="order" id="order" onChange={(e) => ordenPrecio(e)}>
        <option key={'sinFiltro'} value={'sinFiltro'}>Sin Filtros</option>
        <option key={'max'} value={'max'}>Mayor Precio</option>
        <option key={'min'} value={'min'}>Menor Precio</option>
      </select>
      {
        actualPage?.map(e =>

          <div>

            {
              e.marca ? <p>Marca: {e.marca}</p> : ''
            }
            {
              e.tipo ? <p>tipo: {e.tipo}</p> : ''
            }
            {
              e.modelo ? <p>Modelo: {e.modelo}</p> : ''
            }
            {
              e.fabricacion ? <p>fabricacion: {e.fabricacion}</p> : ''
            }
            {
              e.astillero ? <p>astillero: {e.astillero}</p> : ''
            }
            {
              e.motor ? <p>Motor: {e.motor}</p> : ''
            }
            {
              e.localizacion ? <p>localizacion: {e.localizacion}</p> : ''
            }

            {
              e.precio ? <p>precio: {e.precio}</p> : ''
            }
            {
              e.producto ? <p>producto: {e.producto}</p> : ''
            }
            {
              e.descripcion ? <p>descripcion: {e.descripcion}</p> : ''
            }
            {
              e.Tamaño ? <p>Tamaño: {e.Tamaño}</p> : ''
            }
            {
              e.imagen?.map(e =>
                <img src={e} alt='img' />
              )
            }
          </div>
        )
      }
    </div>);
};
