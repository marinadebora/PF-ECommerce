import {AppBar, Toolbar, IconButton, Typography, Button, Badge, Grid} from "@mui/material";
import "../styles/navBar.css";
import Logo from "../imagenes/logo_PF_Yatch.png";
import { ShoppingCart } from "@mui/icons-material";
import SearchBar from "./SearchBar";
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import '../styles/searchBar.css';
import { useSelector } from "react-redux";


export default function Navbar() {
  //constante para cambiar e numero del carrito de forma dinamica
  // si la activo se rompe el detail por un tema de estado
 /*  const carrito=useSelector(state=>state.basket)
  const suma=carrito.filter(Boolean).length
 */

  return (
    
      <AppBar position="sticky" id="appBar">
        <Grid>
          <Toolbar>
          <Link to='/home'>
              <IconButton>
                <img src={Logo} alt="img" id="logo" />
              </IconButton>
            </Link>
            
           
            <Typography sx={{marginLeft: 'auto'}} variant="h6" component="p" id='guest'>
            <Link id='adminNavbar' to='/admin'>
              Hello Guest
              </Link>
            </Typography>
            

            <Button variant="outlined" id="button">Sing In</Button>
            <Button variant="outlined" id="button">Register</Button>
            <Link to='/checkoutPage'>
              <IconButton arial-label="show cart items" id="cartButton">
                <Badge badgeContent={3} color="secondary" id='badge'>
                  <ShoppingCart id="cart" />
                </Badge>
              </IconButton>
            </Link>
            
          </Toolbar>
        </Grid>
      </AppBar>
    
  );
}
