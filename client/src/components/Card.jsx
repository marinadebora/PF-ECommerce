import React, { Fragment } from "react";
import { styled } from "@mui/material/styles";
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


<<<<<<< HEAD
export default function Producto({ tipo, precio, fabricacion, imagenes, Link }) {

=======

export default function Producto({ tipo, precio, fabricacion, imagen, Link}) {
>>>>>>> 84b1fddbd10c7eb317d942618ca8b89eef356c0d
  return (
    <Fragment>
      <Card sx={{ maxWidth: 345 }} id='card'>
        <CardHeader
          title={
            <Typography fontSize="20px" fontFamily="arial" underline="none">
              {tipo}
            </Typography>
          }
        />
<<<<<<< HEAD
        
        { imagenes?
         <CardMedia
         component="img"
         height="200"
         image={imagenes} />
         :''
            
        }
        
       
=======

        { imagen?.map(e =>
          <CardMedia id='imgCard'
          component="img"
          height="200"
          image={e} />
             
             )}
>>>>>>> 84b1fddbd10c7eb317d942618ca8b89eef356c0d
        <CardContent>
          {
            fabricacion? <Typography>Año: {fabricacion}</Typography>:''
          }
         
        </CardContent>
        <CardActions disableSpacing id='cardAction'>
          <IconButton aria-label="add to favorites">
            <AddShoppingCartIcon />
          </IconButton>
<<<<<<< HEAD
          
=======
>>>>>>> 84b1fddbd10c7eb317d942618ca8b89eef356c0d
          <Button id='infoButton' sx={{marginLeft: 'auto'}} size="small">{Link}</Button>
        </CardActions>
      </Card>
    </Fragment>
  );

}