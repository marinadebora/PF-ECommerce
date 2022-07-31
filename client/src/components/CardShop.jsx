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
import swal from "sweetalert";
import {useNavigate } from "react-router-dom";








export default function Producto({ tipo,id, producto, marca ,precio, fabricacion, imagenes, Link}) {
  
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
        
      </Card>
    </Fragment>
  );

}