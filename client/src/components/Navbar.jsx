import {AppBar, Toolbar, IconButton, Typography, Button, Badge, Grid} from "@mui/material";
import "../styles/navBar.css";
import Logo from "../imagenes/logo_PF_Yatch.png";
import { ShoppingCart } from "@mui/icons-material";
import SearchBar from "./SearchBar";
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import '../styles/searchBar.css';


export default function Navbar() {
  return (
    
      <AppBar position="sticky" id="appBar">
        <Grid>
          <Toolbar>
            <IconButton>
              <img src={Logo} alt="img" id="logo" />
            </IconButton>
            
           
            <Typography sx={{marginLeft: 'auto'}} variant="h6" component="p" id='guest'>
            <Link id='adminNavbar' to='/admin'>
              Hello Guest
              </Link>
            </Typography>
            

            <Button variant="outlined" id="button">Sing In</Button>
            <Button variant="outlined" id="button">Register</Button>

            <Link to='home/checkoutPage'>
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
