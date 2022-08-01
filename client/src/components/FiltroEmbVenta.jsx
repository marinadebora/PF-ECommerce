import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import { barcosEnVenta, filtroPrecio, filtrosCategoriaEmbarcacion, precioOrden } from '../actions/actions';

export function FiltroEmbVenta({ setPage })
{
	const dispatch = useDispatch()
	const [, setOrdering] = useState('')
	useEffect(() =>
	{
		dispatch(barcosEnVenta())
	}, [])

	const filtroPorPrecio = (event) =>
	{
		event.preventDefault()
		if (event.target.value === 'sinFiltro') {
			dispatch(barcosEnVenta())
			setPage(1)
			setOrdering(`Order ${event.target.value}`)

		} else {
			dispatch(filtroPrecio(event.target.value))
			localStorage.getItem("filtrar")
			setPage(1)
			setOrdering(`Order ${event.target.value}`)
		}
	}

	const filtroPorCategoria = (event) =>
	{
		event.preventDefault()
		if (event.target.value === 'sinFiltro') {
			dispatch(barcosEnVenta())
			setPage(1)
			setOrdering(`Order ${event.target.value}`)
		} else {
			dispatch(filtrosCategoriaEmbarcacion(event.target.value))
			setPage(1)
			setOrdering(`Order ${event.target.value}`)
		}
	}

	const ordenPrecio = (event) =>
	{
		event.preventDefault()
		if (event.target.value === 'sinFiltro') {
			dispatch(barcosEnVenta())
			setPage(1)
			setOrdering(`Order ${event.target.value}`)
		} else {
			dispatch(precioOrden(event.target.value))
			setPage(1)
			setOrdering(`Order ${event.target.value}`)
		}
	}
	
	return (
		<div>
			<label key='venta'>Filtrar por Precio </label>
			<select name="venta" id="barcoVenta" onChange={(e) => filtroPorPrecio(e)}>
				<option key={'sinFiltro'} value={'sinFiltro'}>Sin Filtros</option>
				<option key={'mayor'} value={'mayor'}>Mas de US$ 300000 </option>
				<option key={'medio'} value={'medio'}>Entre US$ 150000 - US$ 300000 </option>
				<option key={'menor'} value={'menor'}>Menos de US$ 150000</option>
			</select>

			<label key='categoriasR'>Filtrar por Gama</label>
			<select name="categoriasR" id="categoriasR" onChange={(e) => filtroPorCategoria(e)}>
				<option key={'sinFiltro2'} value={'sinFiltro'}>Sin Filtros</option>
				<option key={'Gama Alta'} value={'Alta'}>Gama Alta</option>
				<option key={'Gama Media'} value={'media'}>Gama Media</option>
				<option key={'Gama Baja'} value={'baja'}>Gama Baja</option>
			</select>

			<label key='venta'>Ordenar</label>
			<select name="order" id="order" onChange={(e) => ordenPrecio(e)}>
				<option key={'sinFiltro3'} value={'sinFiltro'}>Sin Filtros</option>
				<option key={'max'} value={'max'}>Mayor Precio</option>
				<option key={'min'} value={'min'}>Menor Precio</option>
			</select>

		</div>
	)
}


