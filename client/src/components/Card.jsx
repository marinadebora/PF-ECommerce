import React, { Fragment, useEffect } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Button from '@mui/material/Button';
import '../styles/card.css';
import {addToBasket,getItemsCart} from '../actions/actions'
import {useDispatch, useSelector, } from 'react-redux'
import {  useState } from 'react';
<<<<<<< HEAD
=======
import swal from "sweetalert";
import {useNavigate } from "react-router-dom";






>>>>>>> 4ef4920affd3355bcdbd8720ee388694eaccb3c0


export default function Producto({ tipo,id, producto, marca ,precio, fabricacion, imagenes, Link}) {

  const cartFromLocalStorage = JSON.parse(localStorage.getItem("item2") || "[]");
  const [cart /* setCart */] = useState(cartFromLocalStorage);
  
  
  
  
   const navigate = useNavigate();
   const [contador, setContador] = useState(0)
   const dispatch = useDispatch() 
   const basket=useSelector(state=>state.basket)  
   /*function addToCart(){
    localStorage.getItem("item2")
    const idlocal = cartFromLocalStorage.map(e=> e._id)
          const searchId = idlocal.includes(id)
          localStorage.getItem("item2")
          console.log(searchId)
         if(searchId){
            return  alert("error")
            
          }
    
    dispatch(addToBasket({id}))
   
     
  }*/
  /*useEffect(()=>{
    let localUser
    ( async() => {
    if(localStorage.getItem('userInfo')){
        localUser = JSON.parse(localStorage.getItem('userInfo'));
        setUser(localUser)
    }
    })()
}, [dispatch])*/
  const addToCart = () =>{
    
   
    dispatch(addToBasket({id}))
     return  swal({
      title: "Your product was successfully added to the cart",
      text: "What do you want to do next?",
      icon: "success",
      buttons: {
        cart: {
          text: "Go to cart",
          value: "cart",
        },
       
        cancel: "Stay",
      },
    }).then((value) => {
      switch (value) {
        case "cart":
          navigate("/checkoutPage");
          swal("Welcome to your cart", "Have a nice buy!", "success");
          break;

        default:
          break;
      }
    });
     
  }
  
   
  useEffect(()=>{
    localStorage.getItem("item2")
    
    
 

},[localStorage.getItem("item2")])
   
   
   

 
  
  
  return (
    <Fragment>
      <Card sx={{ maxWidth: 330 }} id='card'>
        <CardHeader
          title={

            tipo ?
            <Typography fontSize="15px" fontFamily="arial" fontWeight='bold' underline="none">
               {tipo}
            </Typography>
            :producto?
            <Typography fontSize="15px" fontFamily="arial" fontWeight='bold' underline="none">
               {producto}
            </Typography>

            :marca&&
            <Typography fontSize="15px" fontFamily="arial" fontWeight='bold' underline="none">
              {marca}
            </Typography>

          }
        />

        { imagenes?
         <CardMedia
         id='imgCard'
         component="img"
         height="200"
         image={imagenes} />
         :''
            
        }
        <CardContent>
        {
            fabricacion? <Typography>Año: {fabricacion}</Typography>:''
          }
          <Typography>Price: {precio}</Typography>
        </CardContent>
        <CardActions disableSpacing id='cardAction'>
          
          <IconButton aria-label="add to cart" onClick={addToCart}>
          <Badge  color="secondary" id='badge'>
            <AddShoppingCartIcon />
            </Badge>
          </IconButton>
          <Button sx={{marginLeft: 'auto'}} size="small">{Link}</Button>
        </CardActions>
      </Card>
    </Fragment>
  );

}






/*export default function Producto({ tipo, id, producto, marca, precio, fabricacion, imagenes, Link })
{
  const [contador, setContador] = useState(0)
  const dispatch = useDispatch() 
  const basket=useSelector(state=>state.basket)    
const [data, setData] = useState( JSON.parse(localStorage.getItem("items") || "[]"))
 localStorage.setItem("items", JSON.stringify(basket))

export default function Producto({ tipo,id, producto, marca ,precio, fabricacion, imagenes, Link}) {
  //const { id } = useParams();
  const [contador,setContador]=useState(0)
   const dispatch = useDispatch()
   
   const addToCart = () =>{
      dispatch(addToBasket(id))
    setContador(contador +1)
   }
  return (
    <Fragment>
      <Card sx={{ maxWidth: 330 }} id='card'>
        <CardHeader
          title={

            tipo ?
            <Typography fontSize="15px" fontFamily="arial" fontWeight='bold' underline="none">
               {tipo}
            </Typography>
            :producto?
            <Typography fontSize="15px" fontFamily="arial" fontWeight='bold' underline="none">
               {producto}
            </Typography>

            :marca&&
            <Typography fontSize="15px" fontFamily="arial" fontWeight='bold' underline="none">
              {marca}
            </Typography>

          }
        />

        { imagenes?
         <CardMedia
         id='imgCard'
         component="img"
         height="200"
         image={imagenes} />
         :''
            
        }
        <CardContent>
        {
            fabricacion? <Typography>Año: {fabricacion}</Typography>:''
          }
          <Typography>Price: {precio}</Typography>
        </CardContent>
        <CardActions disableSpacing id='cardAction'>
          
          <IconButton aria-label="add to cart" onClick={addToCart} >
          <Badge badgeContent={contador} color="secondary" id='badge'>
            <AddShoppingCartIcon />
            </Badge>
          </IconButton>
          <Button sx={{marginLeft: 'auto'}} size="small">{Link}</Button>
        </CardActions>
      </Card>
    </Fragment>
  );

}*/