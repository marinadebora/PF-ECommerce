import React, { useEffect, useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { barcosEnAlquiler, filtrosCategoriaEmbarcacion } from '../actions/actions'
import { Link, useNavigate } from 'react-router-dom';
import { Box } from '@mui/system';
import Paginado from "./Paginado";
import CardRentaVenta from './CardRentaVenta';
import Navbar from './Navbar';

import Footer from './Footer';
import { Grid } from '@mui/material'
import '../styles/searchBar.css';
import '../styles/box.css'

export function BarcosEnAlquiler()
{
  const navigate = useNavigate()
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

  const volver = () =>
  {
    navigate(-1)
  }


  
  return (
    <div>

    <Navbar/>
        <Box id='boxAlq'>
                <Box id='textBox1'>ALQUILER</Box>
                <Box id='textBox1aV'>Realiza tu consulta</Box>
                <Box id='textBox1aV'>y te contactamos en el día</Box>
                
            </Box>
      
    
      <Grid container spacing={2}>
        {

          actualPage?.map(e => 
          {
            return (
              <Fragment>


                <Grid item xs={12} sm={6} md={4} lg={3}>

                  <CardRentaVenta
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
                    Link={<Link to={`/home/${e._id}`} id='linkCard'>Info</Link>}
                  />

                </Grid>




              </Fragment>
            )
          })
        }
      </Grid>
      
      <button id='buttonBack' onClick={volver}>VOLVER</button>
      
      <Paginado
        characterPerPage={characterPerPage}
        newState={productAlquiler.length}
        paginado={paginado}
      />
      
      <Footer/>

    </div>);

};


