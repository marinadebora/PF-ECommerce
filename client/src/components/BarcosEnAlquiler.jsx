import React, { useState, Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import Paginado from "./Paginado";
import Card from './Card';
import { Grid } from '@mui/material'
import '../styles/searchBar.css';
import { FiltroEmbRenta } from "./FiltroEmbRenta";

export function BarcosEnAlquiler()
{
  const productAlquiler = useSelector(state => state.rentVessels)

 //----------paginado---------//

  const [page, setPage] = useState(1);
  const [characterPerPage, /* setCharacterPerPage */] = useState(5);
  const index = page * characterPerPage;
  const endIndex = index - characterPerPage;
  const actualPage = productAlquiler?.slice(endIndex, index);



  const paginado = (numPage) =>
  {
    setPage(numPage)
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
      <FiltroEmbRenta 
      setPage={setPage}
      />
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


