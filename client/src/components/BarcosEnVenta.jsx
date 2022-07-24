import React, { useEffect, useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { barcosEnVenta, filtroPrecio, filtrosCategoriaEmbarcacion, precioOrden } from '../actions/actions'
import { Link } from 'react-router-dom';
import Paginado from "./Paginado";
import Card from './Card'
import { Grid } from '@mui/material'
import '../styles/searchBar.css';

export function BarcosEnVenta()
{
  const productVenta = useSelector(state => state.saleVessels)
  const dispatch = useDispatch()

  //----------paginado---------//

  const [ordering, setOrdering] = useState('')
  const [page, setPage] = useState(1);
  const [characterPerPage, setCharacterPerPage] = useState(5);
  const index = page * characterPerPage;
  const endIndex = index - characterPerPage;
  const actualPage = productVenta?.slice(endIndex, index);
  const [venta, setVenta] = useState('')
  const [categoriasR, setCategoriasR] = useState('')
  


  const paginado = (numPage) =>
  {
    setPage(numPage)
  }
  console.log(productVenta)
  useEffect(() =>
  {
    dispatch(barcosEnVenta())
  }, [dispatch])

  const filtroPorPrecio = (event) =>
  {
    event.preventDefault()
    if (event.target.value === 'sinFiltro') {
      dispatch(barcosEnVenta())
      setPage(1)
      setOrdering(`Order ${event.target.value}`)
    } else {
      dispatch(filtroPrecio(event.target.value))
      setVenta(true)
      setPage(1)
      setOrdering(`Order ${event.target.value}`)
    }

  }

  const filtroPorCategoria = (event) =>
  {
    event.preventDefault()
    if (event.target.value === 'sinFiltro') {
      dispatch(barcosEnVenta())
      setPage(1)
      setOrdering(`Order ${event.target.value}`)
    } else {
    dispatch(filtrosCategoriaEmbarcacion(event.target.value))
    setCategoriasR(true)
    setPage(1)
    setOrdering(`Order ${event.target.value}`)
  }
  }

  const ordenPrecio = (event) =>
  {
    event.preventDefault()
    if (event.target.value === 'sinFiltro') {
      dispatch(barcosEnVenta())
      setPage(1)
      setOrdering(`Order ${event.target.value}`)
    } else {
    dispatch(precioOrden(event.target.value))
    setPage(1)
    setOrdering(`Order ${event.target.value}`)
  }
  }



  return (
    <div>
      <Link to='/home'>
        <button id='buttonBack'>VOLVER</button>
      </Link>
      <Paginado
        characterPerPage={characterPerPage}
        newState={productVenta.length}
        paginado={paginado}
      />
        <label key='venta'>Filtrar por Precio </label>
        <select name="venta" id="barcoVenta" onChange={(e) => filtroPorPrecio(e)}>
        <option key={'sinFiltro'} value={'sinFiltro'}>Sin Filtros</option>
        <option key={'mayor'} value={'mayor'}>Mas de US$ 300000 </option>
        <option key={'medio'} value={'medio'}>Entre US$ 150000 - US$ 300000 </option>
        <option key={'menor'} value={'menor'}>Menos de US$ 150000</option>
      </select>
      {
       venta && <label key='categoriasR'>Filtrar por Gama</label>
      }
      {
        venta &&

        <select name="categoriasR" id="categoriasR" onChange={(e) => filtroPorCategoria(e)}>
          <option key={'sinFiltro'} value={'sinFiltro'}>Sin Filtros</option>
          <option key={'Gama Alta'} value={'Alta'}>Gama Alta</option>
          <option key={'Gama Media'} value={'media'}>Gama Media</option>
          <option key={'Gama Baja'} value={'baja'}>Gama Baja</option>
        </select>
      }
      {
         categoriasR &&<label key='venta'>Ordenar</label>
      }
      {
        categoriasR &&
        <select name="order" id="order" onChange={(e) => ordenPrecio(e)}>
          <option key={'sinFiltro'} value={'sinFiltro'}>Sin Filtros</option>
          <option key={'max'} value={'max'}>Mayor Precio</option>
          <option key={'min'} value={'min'}>Menor Precio</option>
        </select>
      }


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
                    imagenes={e.imagenes[0]}
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
