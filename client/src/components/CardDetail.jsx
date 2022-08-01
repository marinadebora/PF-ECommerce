import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { productosDetail } from "../actions/actions";
import '../styles/cardDetail.css'
import ImagenList from  './ImagenList'
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import '../styles/card.css';
import {addToBasket,getItemsCart} from '../actions/actions'
import {  useState } from 'react';

// import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
// import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
// import Badge from "@mui/material/Badge"
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Button from '@mui/material/Button';
// import '../styles/card.css';
// import {addToBasket,getItemsCart} from '../actions/actions'

// import {  useState } from 'react';

export default function CardDetail()
{ 
  
  

  
  const dispatch = useDispatch();
  const { id } = useParams();
  const myDetail = useSelector(state => state.detail);
<<<<<<< HEAD
  
=======
>>>>>>> 4ef4920affd3355bcdbd8720ee388694eaccb3c0
  const navigate = useNavigate()
  const [contador, setContador] = useState(0)
  const cartFromLocalStorage = JSON.parse(localStorage.getItem("item2") || "[]");
  const [cart /* setCart */] = useState(cartFromLocalStorage);
   
    
<<<<<<< HEAD
    if(cartFromLocalStorage.length) {
      localStorage.setItem(
        "item2",
        JSON.stringify([...cartFromLocalStorage, myDetail])
      );
    } else {
      localStorage.setItem(
        "item2",
        JSON.stringify([myDetail])
      )
    }
    
    
      
      setContador(contador + 1)
     

   }
=======
>>>>>>> 4ef4920affd3355bcdbd8720ee388694eaccb3c0
  useEffect(() =>
  {
    localStorage.getItem("item2")
    localStorage.setItem("item2", JSON.stringify(cart));
    dispatch(productosDetail(id))
  }, [dispatch, id])
   
   
 
  
   const addToCart = () =>{

    
          dispatch(addToBasket({id}))
          
          return alert("producto agregado correctamente")
   }


  const volver = () =>
  {
    navigate(`/accesorios`)
  }


//console.log(myDetail);

  return <div>
    {
      myDetail._id !== id?

      <div>
                <h1>LOADING</h1>
                
            </div>
            :
        <div id='mainContainer'>
          <div>
          {/* {
            myDetail.imagenes?.map(e =>
              <img  id='mainImg' src={e} alt='img' />
            )
          } */}


          <ImagenList/>

          </div>
      
          <ul id='ulDetail'>
          
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
            <IconButton aria-label="add to cart" onClick={addToCart}>
          <Badge  color="secondary" id='badge'>
            <AddShoppingCartIcon />
            </Badge>
          </IconButton>
         
        </div>
        
    }
  </div>;
};
