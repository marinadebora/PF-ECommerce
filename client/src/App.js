import React from 'react';

import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import CardDetail from './components/CardDetail';
import { BarcosEnVenta } from './components/BarcosEnVenta';
import { BarcosEnAlquiler } from './components/BarcosEnAlquiler';
import { Accesorios } from './components/Accesorios';
import Contacto from "./components/contacto";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Navbar/>} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/home/:id' element={<CardDetail />} />
        <Route exact path='/venta' element={<BarcosEnVenta  />} />
        <Route exact path='/alquiler' element={<BarcosEnAlquiler  />} />
        <Route exact path='/accesorios' element={<Accesorios />} />
        <Route exact path='/accesorios/:id' element={<CardDetail />} />
        <Route exact path='/contacto' element={<Contacto />} />

      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
