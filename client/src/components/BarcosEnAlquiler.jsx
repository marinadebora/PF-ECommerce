import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {barcosEnAlquiler} from '../actions/actions'
import { Link } from 'react-router-dom';
import Paginado from "./Paginado";

export function BarcosEnAlquiler (){
const productAlquiler=useSelector(state=>state.rentVessels)
const dispatch=useDispatch()


const [page, setPage] = useState(1);
    const [characterPerPage, setCharacterPerPage] = useState(5);
    const index = page * characterPerPage;
    const endIndex = index - characterPerPage;
    const actualPage = productAlquiler?.slice(endIndex, index);

    const paginado = (numPage) =>{
        setPage(numPage)
      }

useEffect(()=>{
    dispatch(barcosEnAlquiler())
},[dispatch])
  return (
  <div>
      <Link to='/home'>
            <button>VOLVER</button>
          </Link>
          <Paginado 
            characterPerPage ={characterPerPage}
            newState ={productAlquiler.length}
            paginado = {paginado}
            />
     {
      actualPage?.map(e=>

        <div>
        
          {
           e.marca ? <p>Marca: {e.marca}</p> : ''
          }
          {
            e.tipo ? <p>tipo: {e.tipo}</p> : ''
          }
          {
            e.modelo ? <p>Modelo: {e.modelo}</p> : ''
          }
          {
            e.fabricacion ? <p>fabricacion: {e.fabricacion}</p> : ''
          }
          {
            e.astillero ? <p>astillero: {e.astillero}</p> : ''
          }
          {
            e.motor ? <p>Motor: {e.motor}</p> : ''
          }
          {
            e.localizacion ? <p>localizacion: {e.localizacion}</p> : ''
          }
          
          {
            e.precio ? <p>precio: {e.precio}</p> : ''
          }
          {
            e.producto ? <p>producto: {e.producto}</p> : ''
          }
          {
            e.descripcion ? <p>descripcion: {e.descripcion}</p> : ''
          }
          {
            e.Tamaño ? <p>Tamaño: {e.Tamaño}</p> : ''
          }
          {
            e.imagen?.map(e =>
              <img src={e} alt='img' />
            )
          }
        </div>
        )
}
  </div>);
};
