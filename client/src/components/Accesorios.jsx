import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { accesorios, filtroPrecioAccesorios, filtroCategoriaAccesorios } from '../actions/actions'
import { useNavigate,Link } from 'react-router-dom';
import Paginado from "./Paginado";

export function Accesorios()
{
  const accesorio = useSelector(state => state.accesories)
  const dispatch = useDispatch()


  const [page, setPage] = useState(1);
  const [characterPerPage, setCharacterPerPage] = useState(5);
  const index = page * characterPerPage;
  const endIndex = index - characterPerPage;
  const actualPage = accesorio?.slice(endIndex, index);
  const [ordering, setOrdering] = useState('')
  const navigate=useNavigate()
  const paginado = (numPage) =>
  {
    setPage(numPage)
  }

  useEffect(() =>
  {
    dispatch(accesorios())
  }, [dispatch])

  const filtroPorPrecio = (event) =>
  {
    event.preventDefault()
    if (event.target.value === 'sinFiltro') {
      dispatch(accesorios())
    } else {
      dispatch(filtroPrecioAccesorios(event.target.value))
      setPage(1)
      setOrdering(`Order ${event.target.value}`)
    }

  }
  const filtroPorCategoria = (event) =>
  {
    event.preventDefault()
    if (event.target.value === 'sinFiltro') {
      dispatch(accesorios())
    } else {
      dispatch(filtroCategoriaAccesorios(event.target.value))
      setPage(1)
      setOrdering(`Order ${event.target.value}`)
    }

  }
  const volver=()=>{
    navigate(-1)
    }


  return (
    <div>
      
        <button onClick={volver}>VOLVER</button>
      
      <Paginado
        characterPerPage={characterPerPage}
        newState={accesorio.length}
        paginado={paginado}
      />
      <select name="ventaAcc" id="barcoVentaAcc" onChange={(e) => filtroPorPrecio(e)}>
        <option key={'sinFiltro'} value={'sinFiltro'}>Sin Filtros</option>
        <option key={'mayor'} value={'mayor'}>Mas de US$ 100 </option>
        <option key={'medio'} value={'medio'}>Entre US$ 50 - US$ 100 </option>
        <option key={'menor'} value={'menor'}>Menos de US$ 50</option>
      </select>
      <select name="categorias" id="categorias" onChange={(e) => filtroPorCategoria(e)}>
        <option key={'sinFiltro'} value={'sinFiltro'}>Sin Filtros</option>
        <option key={'seguridad'} value={'seguridad'}>Seguridad</option>
        <option key={'electronica'} value={'electronica'}>Electronica</option>
        <option key={'esparcimiento'} value={'esparcimiento'}>Recreativo</option>
      </select>
      {
        actualPage?.map(e =>
          
          <div>
          
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
              <Link to={`/accesorios/${e.id}`}>


                
                {
                  e.imagen?.map(e =>
                    <img src={e} alt='img' />
                  )
                }

              </Link>
            }
          </div>
        )
        
      }
    </div>);
};