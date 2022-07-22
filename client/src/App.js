import React from 'react';

import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import CardDetail from './components/CardDetail';
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Navbar/>} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/home/:id' element={<CardDetail />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
