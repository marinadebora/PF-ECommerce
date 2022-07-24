import React from "react";
import {  useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productName,filtroCatgorias, todasCategorias, todosLosProductos } from "../actions/actions";
import { Link } from "react-router-dom";

export default function SearchBar(){
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const newState = useSelector(state => state.categories)
console.log(newState)




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

  return (

    <div>
      <label >Buscar por Nombre</label>
      <input value={name} key='buscar' type='text' placeholder='buscar...' onChange={(e) => handleChange(e)} />
      <button  type='submit' onClick={(e) => handleSubmit(e)}>BUSCAR</button>

      <label >Buscar por Categoria</label>
      <select name="categoriasR" id="categoriasR" onChange={(e) => filtroPorCategoria(e)}>
      <option key={'all'} value={'sinFiltro'}>Sin Filtros</option>
      {
         newState?.map(e =>
          {
            return <option key={e} value={e}>{e}</option>
          })
      }
     
       </select><br />
     
     <Link to='/venta'><h4>Embarcaciones en Venta</h4></Link>
     <Link to='/alquiler'><h4>Embarcaciones en Renta</h4></Link>
     <Link to='/accesorios'><h4>Accesorios</h4></Link>


    </div>
  )

  
};
