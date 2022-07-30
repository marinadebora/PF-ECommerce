import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { productosDetail } from "../../actions/actions"
import { deleteAccesorio, deleteEmbarcacionRT,deleteEmbarcacionEnV } from "../../actions/actions"
import { Link } from "react-router-dom";
import '../../styles/cardDetail.css'

export default function CardDetailAdmin()
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

function delacc(idacc){
  dispatch(deleteAccesorio(idacc));
  return (
      alert(`El accesorio fue eliminada con éxito.`), navigate(`/admin`)
      ) 
}

function delEmbRT(idrt){
  dispatch(deleteEmbarcacionRT(idrt));
  return (
      alert(`La embarcacion fue eliminada con éxito.`), navigate(`/admin`)
      ) 
}

function delEmbVT(idvt){
  dispatch(deleteEmbarcacionEnV(idvt));
  return (
      alert(`La embarcacion fue eliminada con éxito.`), navigate(`/admin`)
      ) 
}
console.log(id)



  return <div>
    {
      myDetail ?
        <div>


            <button onClick={volver}>VOLVER</button>

            <div>
           {
            myDetail.producto 
            ?<Link to={`/admin/updateacc/${id}`}><button className="update_button">Update Accesorio</button></Link>
            
            : ""
           }
           {
            myDetail.marca 
            ?<Link to={`/admin/updateembrt/${id}`}><button className="update_button">Update Embarcacion Renta</button></Link>
            : ""
           }
            {
            myDetail.tipo
            ?<Link to={`/admin/updateembventa/${id}`}><button className="update_button">Update Embarcacion Venta</button></Link>
            : ""
           }
              
            </div>
            <div>
           {
            myDetail.producto 
            ?<button onClick={() => delacc(id)} className="delete-button">Delete</button>
            
            : ""
           }
           {
            myDetail.marca 
            ?<button onClick={() => delEmbRT(id)} className="delete-button">Delete</button>
            : ""
           }
            {
            myDetail.tipo
            ?<button onClick={() => delEmbVT(id)} className="delete-button">Delete</button>
            : ""
           }
              
            </div>
            
            
          {
            myDetail.marca ? <p>Marca: {myDetail.marca}</p> : ''
          }
          {
            myDetail.tipo ? <p>tipo: {myDetail.tipo}</p> : ''
          }
          {
             myDetail.categorias?  (
               <>
               <h3>Categorias:</h3>
               <ul className="list-cat">
                                
               {myDetail.categorias?.map(e => <li>{e}</li>)}
               </ul>
               
               </> )
               :""
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
            myDetail.hp ?<p>Hp: {myDetail.hp}</p> : ''
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
            myDetail.transmision ?<p>Transmision: {myDetail.transmision}</p> : ''
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
            )
          }
        </div>
        : <h1><strong>Loading...</strong></h1>
    }
  </div>;
};