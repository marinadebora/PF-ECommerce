import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { productosDetail } from "../actions/actions";
import '../styles/cardDetail.css'
import ImagenList from  './ImagenList'

export default function CardDetail()
{
  const dispatch = useDispatch();
  const { id } = useParams();
  const myDetail = useSelector(state => state.detail);
  const navigate = useNavigate()

  useEffect(() =>
  {
    dispatch(productosDetail(id))
  }, [dispatch, id])

  const volver = () =>
  {
    navigate(-1)
  }


//console.log(myDetail);

  return <div>
    {
      myDetail ?
        <div id='mainContainer'>
          <div>
          {/* {
            myDetail.imagenes?.map(e =>
              <img  id='mainImg' src={e} alt='img' />
            )
          } */}


          <ImagenList/>

          </div>
      
          <ul>
          
          {
            myDetail.marca ? <li><p>Marca: {myDetail.marca}</p></li> : ''
          }
          {
            myDetail.tipo ? <li><p>tipo: {myDetail.tipo}</p></li> : ''
          }
          {
            myDetail.modelo ? <li><p>Modelo: {myDetail.modelo}</p></li> : ''
          }
          {
            myDetail.fabricacion ? <li><p>fabricacion: {myDetail.fabricacion}</p></li> : ''
          }
          {
            myDetail.astillero ? <li><p>astillero: {myDetail.astillero}</p></li> : ''
          }
          {
            myDetail.motor ? <li><p>Motor: {myDetail.motor}</p></li> : ''
          }
          {
            myDetail.localizacion ? <li><p>localizacion: {myDetail.localizacion}</p></li> : ''
          }
          
          {
            myDetail.precio ? <li><p>precio: {myDetail.precio}</p></li> : ''
          }
          {
            myDetail.producto ? <li><p>producto: {myDetail.producto}</p></li> : ''
          }
          {
            myDetail.descripcion ? <li><p>descripcion: {myDetail.descripcion}</p></li> : ''
          }
          {
            myDetail.Tamaño ? <li><p>Tamaño: {myDetail.Tamaño}</p></li> : ''
          }
          
          </ul>
         
            <button id='buttonBack' onClick={volver}>VOLVER</button>
         
        </div>
        : <h1><strong>Loading...</strong></h1>
    }
  </div>;
};