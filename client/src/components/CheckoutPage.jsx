
import NavBar from './Navbar'
import { addToBasket } from '../actions/actions'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import {Grid} from '@mui/material'
import Card from './Card'
import { Link } from 'react-router-dom';




export default function CheckoutPage(){

    const dispatch = useDispatch()

    const stateBasket = useSelector(state => state.basket)
   
    useEffect(()=>{

        dispatch(addToBasket())

    },[dispatch])

    console.log(stateBasket)

    return(
        <div>
        <NavBar/>
        
        <Grid container spacing={1}>
            {
                stateBasket?.map(e => 
                    {
                        return(
                            <>
                               
                                <Grid item xs={12} sm={6} md={4} lg={3}>
                             
                                <Card 
                                    tipo = {e.tipo}
                                    marca={e.marca}
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
                                    Link={<Link to={`/home/${e._id}`} id='buttonText' >Info</Link> }
                                />
                                      
                                </Grid>
                        
                            </>
                        ) 
                    })
            }
            </Grid>
        </div>
    )
        }

   
