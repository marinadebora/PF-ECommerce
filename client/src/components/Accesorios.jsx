import React, { useState, Fragment } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Link } from 'react-router-dom';
import Paginado from "./Paginado";
import Card from './Card'
import { Grid } from '@mui/material'
import '../styles/searchBar.css';
import { FiltrosAccesorios } from "./FiltrosAccesorios";
export function Accesorios(){ 
  const accesorio = useSelector(state => state.accesories)
  //----------paginado---------//

  const [page, setPage] = useState(1);
  const [characterPerPage, setCharacterPerPage] = useState(5);
  const index = page * characterPerPage;
  const endIndex = index - characterPerPage;
  const actualPage = accesorio?.slice(endIndex, index);
  const navigate = useNavigate()
 


  const paginado = (numPage) =>
  {
    setPage(numPage)
  }

  console.log(accesorio)


  

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

    <FiltrosAccesorios
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