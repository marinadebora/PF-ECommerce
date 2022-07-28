import {AppBar, Toolbar, IconButton, Typography, Button, Badge, Grid} from "@mui/material";
import "../styles/navBar.css";
import Logo from "../imagenes/logo_PF_Yatch.png";
import { ShoppingCart } from "@mui/icons-material";
import { Link } from 'react-router-dom';
import '../styles/footer.css';



export default function Footer() {
 

  return (
    
      <AppBar position="sticky" id="footer">
        <Grid>
          <Toolbar>
        
            <Link to='/checkoutPage'>
              <IconButton sx={{marginRight: 'auto'}} arial-label="show cart items" id="cartButton">
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
