import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import PlayerPage from './pages/player-page';
import Compare from './pages/compare';

function App() {

  return (
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/player/:playerName' element={<PlayerPage />}/>
        <Route path='/compare' element={<Compare />} />
      </Routes>
  );
}

export default App;
