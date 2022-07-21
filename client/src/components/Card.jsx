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
import '../infoPrueba/productos';
import '../styles/card.css';


export default function Producto({ tipo, precio, fabricacion, imagen }) {
  return (
    <Fragment>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          title={
            <Typography fontSize="20px" fontFamily="arial">
              {tipo}
            </Typography>
          }
        />

        <CardMedia
        component="img"
        height="200"
        image={
            imagen?.map(e =>
              <img src={e} alt='img' />
            )
          } />
        <CardContent>
          <Typography>Año: {fabricacion}</Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <AddShoppingCartIcon />
          </IconButton>
          <Button id='infoButton' sx={{marginLeft: 'auto'}} size="small">Info</Button>
        </CardActions>
      </Card>
    </Fragment>
  );

}

