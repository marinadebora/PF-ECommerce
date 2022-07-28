import React from "react";
import {  useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productName,filtroCatgorias, todasCategorias, todosLosProductos } from "../actions/actions";
import {AppBar, Toolbar, Grid, Button} from "@mui/material";
import "../styles/navBar.css";
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import '../styles/searchBar.css';






export default function SearchBar(){

  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const newState = useSelector(state => state.categories)
  




    useEffect(()=>{

      dispatch(todasCategorias())

  },[dispatch]) 

  function handleChange(event){
    event.preventDefault()
    setName(event.target.value)

  }

  function handleSubmit(event){
    event.preventDefault();
    const product = productName(name);
    if (!name) {
      return alert('el campo esta vacio')
    } else {

      dispatch(product)
      setName('')
    }

  }

  const filtroPorCategoria = (event) =>
  {
    if(event.target.value==='sinFiltro'){
      dispatch(todosLosProductos())
     
    }else{
      event.preventDefault()
      dispatch(filtroCatgorias(event.target.value))
    }
  }

  const reset = () =>{
    dispatch(todosLosProductos())
  }

  return (

    <AppBar position='static' id="appBar2">
        <Grid>
          <Toolbar>
          <Button><Link class='item' id='LinkVenta' to='/venta'><h4>EMBARCACIONES EN VENTA</h4></Link></Button>
          <Button><Link class='item' id='LinkRenta' to='/alquiler'><h4>EMBARCACIONES EN RENTA</h4></Link></Button>
          <Button><Link class='item' id='LinkAccesorios' to='/accesorios'><h4>ACCESORIOS</h4></Link></Button>
   
    <div id='campos'>
      
      <label id='text'>Buscar por Categoria:</label>
      <select name="categoriasR" id="categoriasR" onChange={(e) => filtroPorCategoria(e)}>
      <option key={'all'} value={'sinFiltro'}>Sin Filtros</option>
      {
         newState?.map(e =>
          {
            return <option key={e} value={e}>{e}</option>
          })
       
      }
      
        
       
      
     
       </select>

      <label id='text'>Buscar por Nombre:</label>
      <input value={name} key='buscar' type='text' placeholder='buscar...' onChange={(e) => handleChange(e)} />
      <button  type='submit' id='buttonB' onClick={(e) => handleSubmit(e)}>Buscar</button>
      <button id='buttonB' onClick={reset}>Reset</button>
        
    </div>

        
        
    </Toolbar>
        </Grid>
      </AppBar>
  )

  
};

