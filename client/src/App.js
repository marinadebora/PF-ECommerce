import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import CardDetail from './components/CardDetail';
import { BarcosEnVenta } from './components/BarcosEnVenta';
import { BarcosEnAlquiler } from './components/BarcosEnAlquiler';
import { Accesorios } from './components/Accesorios';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Admin from "./components/Admin/Admin"
import {AccesoriosCreate} from "./components/Admin/CreateAccesorios"
import {EmbarcacionCreateEnV} from "./components/Admin/CreateEmbarcacionEnv"
import {EmbarcacionCreateRT} from "./components/Admin/CreateEmbarcionERT"
import CardDetailAdmin from "./components/Admin/CardDetailAdmin"
import {UpdateAccesorio} from "./components/Admin/EditAccesorios"
import {UpdateEmbarcacionRenta} from "./components/Admin/EditEmbarcacionRT"
import {UpdateEmbarcacionVenta}  from "./components/Admin/EditEmbarcacionEnv"
import CheckoutPage from './components/CheckoutPage'
<<<<<<< HEAD
import {CatCreate} from "./components/Admin/CreateCat"
=======
>>>>>>> debora/carrito

function App() {
  return (
   
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Navbar/>} />
        <Route exact path='/' element={<SearchBar />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/home/:id' element={<CardDetail />} />
        <Route exact path='/checkoutPage' element={<CheckoutPage />}/>
        <Route exact path='/admin' element={<Admin/>} />
        <Route exact path='/admin/:id' element={<CardDetailAdmin />} />
        <Route exact path='/admin/createAcc' element={<AccesoriosCreate />} />
        <Route exact path='/admin/createEmbarcacionVenta' element={<EmbarcacionCreateEnV />} />
        <Route exact path='/admin/createEmbarcacionRenta' element={<EmbarcacionCreateRT/>} />
<<<<<<< HEAD
        <Route exact path='/admin/createCat' element={<CatCreate/>} />
=======
>>>>>>> debora/carrito
        <Route exact path='/admin/updateacc/:id' element={<UpdateAccesorio/>} />
        <Route exact path='/admin/updateembrt/:id' element={<UpdateEmbarcacionRenta/>} />
        <Route exact path='/admin/updateembventa/:id' element={<UpdateEmbarcacionVenta/>} />
        <Route exact path='/venta' element={<BarcosEnVenta  />} />
        <Route exact path='/alquiler' element={<BarcosEnAlquiler  />} />
        <Route exact path='/accesorios' element={<Accesorios />} />
        <Route exact path='/accesorios/:id' element={<CardDetail />} />
      </Routes>
    </div>
   
  );
}

export default App;