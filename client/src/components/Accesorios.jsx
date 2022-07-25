import React, { useEffect, useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { accesorios, filtroPrecioAccesorios, filtroCategoriaAccesorios,precioOrdenAccesorios } from '../actions/actions'
import { useNavigate, Link } from 'react-router-dom';
import Paginado from "./Paginado";
import Card from './Card'
import { Grid } from '@mui/material'
import '../styles/searchBar.css';
export function Accesorios(){ 
  const accesorio = useSelector(state => state.accesories)
  const dispatch = useDispatch()
  //----------paginado---------//

  const [page, setPage] = useState(1);
  const [characterPerPage, setCharacterPerPage] = useState(5);
  const index = page * characterPerPage;
  const endIndex = index - characterPerPage;
  const actualPage = accesorio?.slice(endIndex, index);
  const [ordering, setOrdering] = useState('')
  const navigate = useNavigate()
  const [venta, setVenta] = useState('')
  const [categorias, setCategorias] = useState('')


  const paginado = (numPage) =>
  {
    setPage(numPage)
  }

  console.log(accesorio)

  useEffect(() =>
  {
    dispatch(accesorios())
  }, [dispatch])



  const filtroPorPrecio = (event) =>
  {
    event.preventDefault()
    if (event.target.value === 'sinFiltro') {
      dispatch(accesorios())
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
      dispatch(accesorios())
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
    if (event.target.value === 'sinFiltro') {
      dispatch(accesorios())
      setPage(1)
      setOrdering(`Order ${event.target.value}`)
    } else {
    dispatch(precioOrdenAccesorios(event.target.value))
    setPage(1)
    setOrdering(`Order ${event.target.value}`)
  }
  }

  const volver = () =>
  {
    navigate(-1)
  }


  return (
    <div>

      <button id='buttonBack' onClick={volver}>VOLVER</button>

      <Paginado
        characterPerPage={characterPerPage}
        newState={accesorio.length}
        paginado={paginado}
      />

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
        categorias && <label key='venta'>Ordenar</label>
       } 
        
      {
        categorias &&
        <select name="order" id="order" onChange={(e) => ordenPrecio(e)}>
          <option key={'sinFiltro'} value={'sinFiltro'}>Sin Filtros</option>
          <option key={'max'} value={'max'}>Mayor Precio</option>
          <option key={'min'} value={'min'}>Menor Precio</option>
        </select>
      }
      <br />
      <br />
      <br />

      <Grid container spacing={2}>
        {

          actualPage?.map(e => 
          {
            return (
              <Fragment>


                <Grid item xs={12} sm={6} md={4} lg={3}>

                  <Card
                    tipo={e.tipo}
                    Marca={e.Marca}
                    modelo={e.modelo}
                    Motor={e.Motor}
                    precio={e.precio}
                    astillero={e.astillero}
                    fabricacion={e.fabricacion}
                    localizacion={e.localizacion}
                    imagenes={e.imagenes}
                    producto={e.producto}
                    descripcion={e.descripcion}
                    Tamaño={e.Tamaño}
                    Link={<Link to={`/home/${e._id}`} >Info</Link>}
                  />

                </Grid>




              </Fragment>
            )
          })
        }
      </Grid>


    </div>);
};