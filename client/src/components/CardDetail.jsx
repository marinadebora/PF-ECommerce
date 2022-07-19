
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { productosDetail } from "../actions/actions";

export default function CardDetail()
{
  const dispatch = useDispatch();
  const { id } = useParams();
  const myDetail = useSelector(state => state.detail);

  useEffect(() =>
  {
    dispatch(productosDetail(id))
  }, [dispatch, id])



  return <div>
    {
      myDetail ?
        <div>
          <Link to='/home'>
            <button>VOLVER</button>
          </Link>
          {
            myDetail.marca ? <p>Marca: {myDetail.marca}</p> : ''
          }
          {
            myDetail.tipo ? <p>tipo: {myDetail.tipo}</p> : ''
          }
          {
            myDetail.modelo ? <p>Modelo: {myDetail.modelo}</p> : ''
          }
          {
            myDetail.fabricacion ? <p>fabricacion: {myDetail.fabricacion}</p> : ''
          }
          {
            myDetail.astillero ? <p>astillero: {myDetail.astillero}</p> : ''
          }
          {
            myDetail.motor ? <p>Motor: {myDetail.motor}</p> : ''
          }
          {
            myDetail.localizacion ? <p>localizacion: {myDetail.localizacion}</p> : ''
          }
          
          {
            myDetail.precio ? <p>precio: {myDetail.precio}</p> : ''
          }
          {
            myDetail.producto ? <p>producto: {myDetail.producto}</p> : ''
          }
          {
            myDetail.descripcion ? <p>descripcion: {myDetail.descripcion}</p> : ''
          }
          {
            myDetail.Tamaño ? <p>Tamaño: {myDetail.Tamaño}</p> : ''
          }
          {
            myDetail.imagen?.map(e =>
              <img src={e} alt='img' />
            )
          }
        </div>
        : <h1><strong>Loading...</strong></h1>
    }
  </div>;
};
