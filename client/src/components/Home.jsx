import React, { Fragment } from 'react';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import {todosLosProductos} from '../actions/actions'
import Paginado from './Paginado';
import Card from './Card';


export default function Home(){

    const dispatch = useDispatch();
    const newState = useSelector(state => state.products)

    const [page, setPage] = useState(1);
    const [characterPerPage, setCharacterPerPage] = useState(5);
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
            <Paginado 
            characterPerPage ={characterPerPage}
            newState ={newState.length}
            paginado = {paginado}
            />
            {
                actualPage?.map(e => 
                    {
                        return(
                            <Fragment>
                            <Link to={`/home/${e.id}`} >
                            <Card 
                                tipo = {e.tipo}
                                modelo = {e.modelo}
                                precio = {e.precio}
                                astillero = {e.astillero}
                                fabricacion = {e.fabricacion}
                                localizacion = {e.localizacion}
                                imagen = {e.imagen}
                            />
                            </Link>
                            </Fragment>
                        )
                    })
            }

        </div>
    )

}   


