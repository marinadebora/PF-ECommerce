import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { productosDetail } from "../actions/actions";
import '../styles/cardDetail.css'

export default function CardDetail()
{
  const dispatch = useDispatch();
  const { id } = useParams();
  const myDetail = useSelector(state => state.detail);
const navigate=useNavigate()

  useEffect(() =>
  {
    dispatch(productosDetail(id))
  }, [dispatch, id])

const volver=()=>{
navigate(-1)
}


  return <div>
    {
      myDetail ?
<<<<<<< HEAD
        <div>


            <button onClick={volver}>VOLVER</button>

          {
            myDetail.marca ? <p>Marca: {myDetail.marca}</p> : ''
          }
          {
            myDetail.tipo ? <p>tipo: {myDetail.tipo}</p> : ''
          }
          {
            myDetail.categorias ? <p>Categorias: {myDetail.tipo}</p> : ''
          }

          {
            myDetail.modelo ? <p>Modelo: {myDetail.modelo}</p> : ''
          }
          {
            myDetail.fabricacion ? <p>fabricacion: {myDetail.fabricacion}</p> : ''
          }
          {
            myDetail.fabricacionDelMotor? <p>fabricacion del motor: {myDetail.fabricacionDelMotor}</p> : ''
          }
          {
            myDetail.astillero ? <p>astillero: {myDetail.astillero}</p> : ''
          }
          {
            myDetail.motor ? <p>Motor: {myDetail.motor}</p> : ''
          }
          {
            myDetail.marca_de_motor ? <p>Marca de Motor: {myDetail.motor}</p> : ''
          }
          {
            myDetail.eslora? <p>Eslora: {myDetail.eslora}</p> : ''
          }
          {
            myDetail.manga?<p>Manga: {myDetail.eslora}</p> : ''
          }
          {
            myDetail.puntal?<p>Puntal: {myDetail.eslora}</p> : ''
          }
          {
            myDetail.cantMotores ?<p>Cant Motores: {myDetail.eslora}</p> : ''
          }
          {
            myDetail.hp ?<p>Hp: {myDetail.eslora}</p> : ''
          }
          {
            myDetail.marcamotor ?<p>Marca Motor: {myDetail.eslora}</p> : ''
          }
          {
            myDetail.calado ?<p>Calado: {myDetail.eslora}</p> : ''
          }
          {
            myDetail.combustible ?<p>Combustible: {myDetail.eslora}</p> : ''
          }
          {
            myDetail.horas ?<p>Horas: {myDetail.eslora}</p> : ''
          }
          {
            myDetail.transmision ?<p>Transmision: {myDetail.eslora}</p> : ''
          }
          {
            myDetail.numero_de_pasajeros ?<p>Numero de Pasajeros: {myDetail.eslora}</p> : ''
          }
          {
            myDetail.numero_de_motores ?<p>Numero de Motores: {myDetail.eslora}</p> : ''
          }

          {
            myDetail.localizacion ? <p>localizacion: {myDetail.localizacion}</p> : ''
          }

          {
            myDetail.precio ? <p>precio: {myDetail.precio}</p> : ''
          }
          {
            myDetail.potencia_total ? <p>precio: {myDetail.precio}</p> : ''
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
            myDetail.imagenes?.map(e =>
              <img src={e} alt='img' />
=======
        <div id='mainContainer'>
          <div id='mainImg'>
          {
            myDetail.imagen?.map(e =>
              <img src={e} alt='img' id='imgProduc'/>
>>>>>>> 84b1fddbd10c7eb317d942618ca8b89eef356c0d
            )
          }
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
         
           <Link to='/home'>
            <button id='buttonBack'>VOLVER</button>
          </Link>
        </div>
        : <h1><strong>Loading...</strong></h1>
    }
  </div>;
};
