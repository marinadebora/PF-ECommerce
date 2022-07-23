import React from 'react';

import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import CardDetail from './components/CardDetail';
import { BarcosEnVenta } from './components/BarcosEnVenta';
import { BarcosEnAlquiler } from './components/BarcosEnAlquiler';
import { Accesorios } from './components/Accesorios';
import Admin from "./components/Admin/Admin"
import {AccesoriosCreate} from "./components/Admin/CreateAccesorios"
import {EmbarcacionCreateEnV} from "./components/Admin/CreateEmbarcacionEnv"
import {EmbarcacionCreateRT} from "./components/Admin/CreateEmbarcionERT"
import CardDetailAdmin from "./components/Admin/CardDetailAdmin"
import {UpdateAccesorio} from "./components/Admin/EditAccesorios"
import {UpdateEmbarcacionRenta} from "./components/Admin/EditEmbarcacionRT"
import {UpdateEmbarcacionVenta}  from "./components/Admin/EditEmbarcacionEnv"


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route exact path='/home' element={<Home />} />
        <Route  path='/home/:id' element={<CardDetail />} />
        <Route exact path='/admin' element={<Admin/>} />
        <Route  path='/admin/:id' element={<CardDetailAdmin />} />
        <Route  exact path='/admin/createAcc' element={<AccesoriosCreate />} />
        <Route  exact path='/admin/createEmbarcacionVenta' element={<EmbarcacionCreateEnV />} />
        <Route  exact path='/admin/createEmbarcacionRenta' element={<EmbarcacionCreateRT/>} />
        <Route  exact path='/admin/updateacc/:id' element={<UpdateAccesorio/>} />
        <Route  exact path='/admin/updateembrt/:id' element={<UpdateEmbarcacionRenta/>} />
        <Route  exact path='/admin/updateembventa/:id' element={<UpdateEmbarcacionVenta/>} />
        <Route exact path='/venta' element={<BarcosEnVenta  />} />
        <Route exact path='/alquiler' element={<BarcosEnAlquiler  />} />
        <Route exact path='/accesorios' element={<Accesorios />} />
        <Route exact path='/accesorios/:id' element={<CardDetail />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
