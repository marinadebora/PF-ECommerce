import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavBar from './Navbar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registro, usuarios } from '../actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const history = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(state=> state.user)
  const [datos, setDatos] = useState({
    firstName:'',
    lastName:'',
    email:'',
    password:''
  })

  const [error, setError] = useState({
    firstName:'Debe colocar su nombre',
    lastName:'Debe colocar su apellido',
    email:'Debe colocar su correo',
    password:'Debe colocar su clave'
  })

  const validarCampos = (e) => {
    let error = {}
    if(!e.firstName){
        error.firstName = 'Debe contener un nombre valido'
    }
    if(!(/^[a-zA-Z-\s]+$/).test(e.firstName)){
        error.firstName = 'Debe contener solo letras'
    }
    if(!e.lastName){
        error.lastName = 'Debe contener un apellido valido'
    }
    if(!(/^[a-zA-Z-\s]+$/).test(e.lastName)){
        error.last_name = 'Debe contener solo letras'
    }
    if(!e.email){
        error.email = "Debe contener un email valido"
    }
    if(!e.password){
        error.password = 'Debe contener una contraseña valido'
    }
    console.log(error)
    return error
}

const handelOnChangeDatos = (e) =>{
  setDatos({
      ...datos,
      [e.target.name] : e.target.value
  })
  setError(validarCampos({
      ...datos,
      [e.target.name] : e.target.value
  }))
  console.log(datos)
}

useEffect(()=>{
  dispatch(usuarios())
},[dispatch])



  const handleSubmit = (event) => {
    event.preventDefault();
    if(error.hasOwnProperty('last_name') || error.hasOwnProperty('firstName') || error.hasOwnProperty('email') || error.hasOwnProperty('password')){
            alert('Hay errores en los datos')
        }else if(user.find(e=> e.email.toLowerCase() === datos.email.toLowerCase())){
            alert(`el Usuario con el correo: ${datos.email}, ya existe`)
        }else{
            dispatch(registro(datos))
            alert('El usuario se registro correctamente')
            setDatos({
                name:'',
                last_name:'',
                email:'',
                telefono:'',
                direction:'',
                password:''
            })
            history("/singIn")
        }
    
  };


  return (
    <div>
    <NavBar/>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={handelOnChangeDatos}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={handelOnChangeDatos}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handelOnChangeDatos}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={handelOnChangeDatos}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="./singIn" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
    
    </div>
  );
}