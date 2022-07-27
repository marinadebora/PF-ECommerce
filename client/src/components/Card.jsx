import React, { Fragment } from "react";
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
import { addToBasket, productosDetail } from '../actions/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";





export default function Producto({ tipo, id, producto, marca, precio, fabricacion, imagenes, Link })
{
  const [contador, setContador] = useState(0)
  const dispatch = useDispatch() 
  const basket=useSelector(state=>state.basket)    
const [data, setData] = useState( JSON.parse(localStorage.getItem("items") || "[]"))
 localStorage.setItem("items", JSON.stringify(basket))



  const addToCart =async () =>{
    console.log(basket)
    dispatch(addToBasket(id))
    if(basket===null||basket===undefined){
      localStorage.setItem("items", JSON.stringify(JSON.parse(guardar)))
    }
    localStorage.setItem("items", JSON.stringify(basket))
    setData( JSON.parse(localStorage.getItem("items") || "[]"))
      
      setContador(contador + 1)
     
  }
   
let guardar=localStorage.getItem("items")
  
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

        {imagenes ?
          <CardMedia
            component="img"
            height="200"
            image={imagenes} />
          : ''

        }
        <CardContent>
          {
            fabricacion ? <Typography>Año: {fabricacion}</Typography> : ''
          }
          <Typography>Price: {precio}</Typography>
        </CardContent>
        <CardActions disableSpacing id='cardAction'>

          <IconButton aria-label="add to cart" onClick={addToCart} >
            <Badge badgeContent={contador} color="secondary" id='badge'>
              <AddShoppingCartIcon />
            </Badge>
          </IconButton>
          <Button sx={{ marginLeft: 'auto' }} size="small">{Link}</Button>
        </CardActions>
      </Card>
    </Fragment>
  );

}