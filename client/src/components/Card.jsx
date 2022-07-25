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
import {addToBasket} from '../actions/actions'
import {useDispatch} from 'react-redux'
import {  useState } from 'react';





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
            <Typography fontSize="20px" fontFamily="arial" fontWeight='bold' underline="none">
               {tipo}
            </Typography>
            :producto?
            <Typography fontSize="20px" fontFamily="arial" fontWeight='bold' underline="none">
               {producto}
            </Typography>

            :marca&&
            <Typography fontSize="20px" fontFamily="arial" fontWeight='bold' underline="none">
              {marca}
            </Typography>

          }
        />

        { imagenes?
         <CardMedia
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

}