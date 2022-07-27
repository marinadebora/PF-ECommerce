import React, { useEffect, useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { barcosEnAlquiler, filtrosCategoriaEmbarcacion } from '../actions/actions'
import { Link } from 'react-router-dom';
import Paginado from "./Paginado";
import Card from './Card';
import { Grid } from '@mui/material'
import '../styles/searchBar.css';

export function BarcosEnAlquiler()
{
  const productAlquiler = useSelector(state => state.rentVessels)
  const dispatch = useDispatch()

 //----------paginado---------//

  const [page, setPage] = useState(1);
  const [characterPerPage, /* setCharacterPerPage */] = useState(5);
  const index = page * characterPerPage;
  const endIndex = index - characterPerPage;
  const actualPage = productAlquiler?.slice(endIndex, index);
  const [/* ordering */, setOrdering] = useState('')


console.log(productAlquiler)

  const paginado = (numPage) =>
  {
    setPage(numPage)
  }

  useEffect(() =>
  {
    dispatch(barcosEnAlquiler())
  }, [dispatch])


  const filtroPorCategoria = (event) =>
  {
    event.preventDefault()
    if (event.target.value === 'sinFiltro') {
      dispatch(barcosEnAlquiler())
      setPage(1)
      setOrdering(`Order ${event.target.value}`)
    } else {
      dispatch(filtrosCategoriaEmbarcacion(event.target.value))
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
        newState={productAlquiler.length}
        paginado={paginado}
      />
     <label key='venta'>Filtrar por Precio </label>
      <select name="categoriasR" id="categoriasR" onChange={(e) => filtroPorCategoria(e)}>
        <option key={'sinFiltro'} value={'sinFiltro'}>Sin Filtros</option>
        <option key={'Gama Alta'} value={'Alta'}>Gama Alta</option>
        <option key={'Gama Economica'} value={'Economica'}>Gama Economica</option>
        <option key={'Gama Media'} value={'Media'}>Gama Media</option>
      </select><br />
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


