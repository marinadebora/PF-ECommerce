import {AppBar, Toolbar, IconButton, Typography, Button, Badge} from "@mui/material";
import "../styles/navBar.css";
import Logo from "../imagenes/logo_PF_Yatch.png";
import { ShoppingCart } from "@mui/icons-material";

export default function Navbar() {
  return (
    <AppBar position="static" id="appBar">
      <Toolbar>
        <IconButton>
          <img src={Logo} alt="img" id="logo" />
        </IconButton>
        
        <Typography sx={{marginLeft: 'auto'}} variant="h6" component="p" id='guest'>
          Hello Guest
        </Typography>

        <Button variant="outlined" id="button">Sing In</Button>
        <Button variant="outlined" id="button">Register</Button>
        <IconButton arial-label="show cart items" id="cartButton">
          <Badge badgeContent={3} color="secondary">
            <ShoppingCart id="cart" />
          </Badge>
        </IconButton>
        
      </Toolbar>
    </AppBar>
  );
}