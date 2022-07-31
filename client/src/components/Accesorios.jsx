import React, { useEffect, useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { accesorios } from '../actions/actions'
import { useNavigate, Link } from 'react-router-dom';
import Paginado from "./Paginado";
import { Box } from '@mui/system';
import Card from './Card'
import Navbar from './Navbar';
import Footer from './Footer';
import SearchBarProductos from './SearchBarProductos';
import { Grid } from '@mui/material'
import '../styles/searchBar.css';
import '../styles/box.css'
import {FiltrosAccesorios} from './FiltrosAccesorios';
import img from '../imagenes/sin_productos.jpg'


export function Accesorios(){ 
  const accesorio = useSelector(state => state.accesories)
  console.log(accesorio)
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

  useEffect(() =>
  {
    dispatch(accesorios())
  }, [dispatch])

  const volver = () =>
  {
    navigate(-1)
  }


  return (
    <div>

      <Navbar/>
      <Box id='boxAcc'>
                <Box id='textBox1'>VENTA</Box>
      </Box>
      <SearchBarProductos/>
      
      <Grid container spacing={2}>
  
        {

          actualPage.length > 0 ? actualPage.map(e => 
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
          }):  <img className="sin_art" src={img} alt="sin articulos" />
          
         
             
         
        }
      </Grid>
      <br /><br /><br /><br /><br />
      <FiltrosAccesorios
    setPage={setPage}
     />
<br /><br /><br /><br /><br />
      <button id='buttonBack' onClick={volver}>VOLVER</button>

<Paginado
  characterPerPage={characterPerPage}
  newState={accesorio.length}
  paginado={paginado}
/>

<Footer/>
    </div>);
};