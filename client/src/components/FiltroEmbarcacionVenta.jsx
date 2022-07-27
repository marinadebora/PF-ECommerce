import React, { useEffect, useState,} from "react";
import { useDispatch,useSelector } from "react-redux";
import { barcosEnVenta, filtroPrecio, filtrosCategoriaEmbarcacion, precioOrden } from '../actions/actions'


export function FiltroEmbarcacionVenta(){
  const [ordering, setOrdering] = useState('')
  const dispatch = useDispatch()
  const productVenta = useSelector(state => state.saleVessels)
   const [venta, setVenta] = useState('')
  const [categoriasR, setCategoriasR] = useState('')
  
  console.log(productVenta)
  useEffect(() =>
  {
    dispatch(barcosEnVenta())
  }, [dispatch])

  const filtroPorPrecio = (event) =>
  {
    event.preventDefault()
    if (event.target.value === 'sinFiltro') {
      dispatch(barcosEnVenta())
     
    } else {
      dispatch(filtroPrecio(event.target.value))
      setVenta(true)
      
    }

  }

  const filtroPorCategoria = (event) =>
  {
    event.preventDefault()
    if (event.target.value === 'sinFiltro') {
      dispatch(barcosEnVenta())
     
    } else {
    dispatch(filtrosCategoriaEmbarcacion(event.target.value))
    setCategoriasR(true)
   
  }
  }

  const ordenPrecio = (event) =>
  {
    event.preventDefault()
    if (event.target.value === 'sinFiltro') {
      dispatch(barcosEnVenta())
   
    } else {
    dispatch(precioOrden(event.target.value))
   
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
      {
       venta && <label key='categoriasR'>Filtrar por Gama</label>
      }
      {
        venta &&

        <select name="categoriasR" id="categoriasR" onChange={(e) => filtroPorCategoria(e)}>
          <option key={'sinFiltro'} value={'sinFiltro'}>Sin Filtros</option>
          <option key={'Gama Alta'} value={'Alta'}>Gama Alta</option>
          <option key={'Gama Media'} value={'media'}>Gama Media</option>
          <option key={'Gama Baja'} value={'baja'}>Gama Baja</option>
        </select>
      }
      {
         categoriasR &&<label key='venta'>Ordenar</label>
      }
      {
        categoriasR &&
        <select name="order" id="order" onChange={(e) => ordenPrecio(e)}>
          <option key={'sinFiltro'} value={'sinFiltro'}>Sin Filtros</option>
          <option key={'max'} value={'max'}>Mayor Precio</option>
          <option key={'min'} value={'min'}>Menor Precio</option>
        </select>
      }

      
    </div>

    /* 
      const [checkedState, setCheckedState] = useState(
    new Array(toppings.length).fill(false)
  );

  const [total, setTotal] = useState(0);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + toppings[index].price;
        }
        return sum;
      },
      0
    );

    setTotal(totalPrice);
  };
    
    
    
    
    
    <h3>Select Toppings</h3>
      <ul className="toppings-list">
        {toppings.map(({ name, price }, index) => {
          return (
            <li key={index}>
              <div className="toppings-list-item">
                <div className="left-section">
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={name}
                    value={name}
                    checked={checkedState[index]}
                    onChange={() => handleOnChange(index)}
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                </div>
                <div className="right-section">{getFormattedPrice(price)}</div>
              </div>
            </li>
          );
        })} */
  )
}


