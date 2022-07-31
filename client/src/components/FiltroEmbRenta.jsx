import React, {useState,useEffect} from 'react'
import { barcosEnAlquiler, filtrosCategoriaEmbarcacion } from '../actions/actions'
import { useDispatch } from "react-redux";

export function FiltroEmbRenta({setPage}){
    const dispatch = useDispatch()
    const [, setOrdering] = useState('')
  
  useEffect(() =>
  {
    dispatch(barcosEnAlquiler())
  }, [dispatch])


  const filtroPorCategoria = (event) =>
  {
    event.preventDefault()
    if (event.target.value === 'sinFiltro') {
      dispatch(barcosEnAlquiler())
      setPage(1)
      setOrdering(`Order ${event.target.value}`)
    } else {
      dispatch(filtrosCategoriaEmbarcacion(event.target.value))
      setPage(1)
      setOrdering(`Order ${event.target.value}`)
    }

  }
  return (
    <div>
        <label key='venta'>Filtrar por Gama </label>
      <select name="categoriasR" id="categoriasR" onChange={(e) => filtroPorCategoria(e)}>
        <option key={'sinFiltro'} value={'sinFiltro'}>Sin Filtros</option>
        <option key={'Gama Alta'} value={'Alta'}>Gama Alta</option>
        <option key={'Gama Media'} value={'Media'}>Gama Media</option>
        <option key={'Gama Economica'} value={'Economica'}>Gama Economica</option>
      </select><br />
      <br />
      <br />
    </div>
  )
}


