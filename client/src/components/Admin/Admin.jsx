import React, { Fragment } from 'react';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { todosLosProductos } from '../../actions/actions'
import Paginado from '../Paginado';
import Card from '../Card';
import Navbar from '../Navbar'
import {Button, Typography} from "@mui/material";
import admincss from '../../styles/admin.css'
import {Grid} from '@mui/material'



export default function Admin(){

    const dispatch = useDispatch();
    const newState = useSelector(state => state.products)

    const [page, setPage] = useState(1);
    const [characterPerPage, setCharacterPerPage] = useState(8);
    const index = page * characterPerPage;
    const endIndex = index - characterPerPage;
    const actualPage = newState?.slice(endIndex, index);

    const paginado = (numPage) =>{
        setPage(numPage)
      }
 
    useEffect(()=>{

        dispatch(todosLosProductos())

    },[dispatch]) 

    return(
        <div>
            <Navbar/>
            <Typography sx={{marginLeft: 'auto'}} variant="h6" component="p" id='guest1'>
              Wellcome Guest
            </Typography>
            <Button id='buttonCreate' variant="contained"><Link id='linkCreate' to ={`/admin/createAcc`}>Crear Accesorio</Link></Button>
            <Button id='buttonCreate' variant="contained"><Link id='linkCreate' to ={`/admin/createEmbarcacionVenta`}>Crear Embarcacion para la venta</Link></Button>
            <Button id='buttonCreate' variant="contained"><Link id='linkCreate' to ={`/admin/createEmbarcacionRenta`}>Crear Embarcacion para la renta</Link></Button>
            <br/>
            <Link to='/home'>
                <button id='buttonBackAdmin'>VOLVER</button>
            </Link>
            
        <Paginado 
            characterPerPage ={characterPerPage}
            newState ={newState.length}
            paginado = {paginado}
            />
            
            <Grid container spacing={2}>
            {
                
                actualPage?.map(e => 
                    {
                        return(
                            <Fragment>


                                <Grid item xs={12} sm={6} md={4} lg={3}>
                                
                                        <Card 
                                            tipo = {e.tipo}
                                            Marca={e.Marca}
                                            modelo = {e.modelo}
                                            Motor={e.Motor}
                                            precio = {e.precio}
                                            astillero = {e.astillero}
                                            fabricacion = {e.fabricacion}
                                            localizacion = {e.localizacion}
                                            imagenes = {e.imagenes[0]}
                                            producto={e.producto}
                                            descripcion={e.descripcion}
                                            Tamaño={e.Tamaño}
                                            Link={<Link to={`/admin/${e._id}`} >Info</Link> }
                                        />
                                  
                                </Grid>
                                
                            

                         
                            </Fragment>
                        )
                    })
            }
            </Grid> 

        </div>
    )

}   