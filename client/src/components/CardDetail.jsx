
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
            myDetail.imagen?.map(e =>
              <img src={e} alt='img' />
            )
          }
        </div>
        : <h1><strong>Loading...</strong></h1>
    }
  </div>;
};
/* 
    "_id": "62d8ae81d780cdfae6405235",
    "marca": "Genesis",
    "categorias": [],
    "modelo": "Genesis290",
    "fabricacion": "2018",
    "fabricacionDelMotor": 2018,
    "motor": "4 tiempos",
    "imagenes": [
      "https://http2.mlstatic.com/D_NQ_NP_623052-MLA49561613143_042022-O.webp"
    ],
    "eslora": "9.05 m",
    "manga": "2.6 m",
    "puntal": "1. 72 m",
    "cantMotores": "1",
    "hp": "300",
    "marcamotor": "VOLVO PENTA",
    "descripcion": "",
    "combustible": "Nafta",
    "horas": "40",
    "transmision": "Pata Duo Prop.-",
    "createdAt": "2022-07-21T01:40:17.567Z",
    "updatedAt": "2022-07-21T01:40:17.567Z"
  },
    "_id": "62d8b46f497e920550b6f123",
    "tipo": "Catamaran a motor",
    "categorias": [],
    "modelo": "A10",
    "precio": "238386 usd",
    "astillero": "Aventura Catamarans",
    "fabricacion": 2022,
    "localizacion": "España",
    "imagenes": [
      "https://imagenes.cosasdebarcos.com/barcosOcasion/9/0/4/6/a10-aventura-catamarans-70789100210854487068545254684570x.jpg"
    ],
    "numero_de_pasajeros": 10,
    "eslora": "9.98 m",
    "manga": "5.3 m",
    "calado": "0.8 m",
    "numero_de_motores": 2,
    "marca_de_motor": "Yanmar",
    "potencia_total": "200 CV",
    "descripcion": "",
    "combustible": "Diesel",
    "__v": 0
  }, */