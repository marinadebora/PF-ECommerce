import {AppBar, Toolbar, IconButton, Typography, Button, Badge, Grid} from "@mui/material";
import "../styles/navBar.css";
import Logo from "../imagenes/Nautical1.png";
import { ShoppingCart } from "@mui/icons-material";
import { Link } from 'react-router-dom';
import '../styles/searchBar.css';



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
          <Link to='/'>
              <IconButton>
                <img src={Logo} alt="img" id="logoNavBar" />
              </IconButton>
            </Link>

            <Link to='/accesorios' className='paralelogramo'>
              <button src='/accesorios' id='buttonParalel'>Insumos</button>
            </Link>

            <Link to='/venta' className='paralelogramo'>
              <button src='/venta' id='buttonParalel'>Venta Yates</button>
            </Link>

            <Link to='/alquiler' className='paralelogramo'>
              <button src='/alquiler' id='buttonParalel'>Alquiler Yates</button>
            </Link>
            
           
            <Typography sx={{marginLeft: 'auto'}} variant="h6" component="p" id='guest'>
            <Link id='adminNavbar' to='/dashboard'>
              Hello Guest
              </Link>
            </Typography>
            
            <Link to='/singIn'>
              <Button variant="outlined" id="button">Sing In</Button>
            </Link>

            <Link to='/singUp'>
              <Button variant="outlined" id="button">Sing Up</Button>
            </Link>

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
