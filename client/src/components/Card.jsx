import React, { Fragment } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Button from '@mui/material/Button';
import '../styles/card.css';



export default function Producto({ tipo, producto, precio, fabricacion, imagenes, Link}) {
   
  return (
    <Fragment>
      <Card sx={{ maxWidth: 330 }} id='card'>
        <CardHeader
          title={
            tipo ?
            <Typography fontSize="20px" fontFamily="arial" fontWeight='bold' underline="none">
               {tipo}
            </Typography>
            : 
            <Typography fontSize="20px" fontFamily="arial" fontWeight='bold' underline="none">
               {producto}
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
          <IconButton aria-label="add to cart" onClick='addToBasket' >
            <AddShoppingCartIcon />
          </IconButton>
          <Button sx={{marginLeft: 'auto'}} size="small">{Link}</Button>
        </CardActions>
      </Card>
    </Fragment>
  );

}