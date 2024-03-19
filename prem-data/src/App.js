import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import PlayerPage from './pages/player-page';
import Compare from './pages/compare';
import Create from './pages/create';
import Quiz from './pages/quiz';

function App() {

  return (
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/player/:playerName' element={<PlayerPage />}/>
        <Route path='/compare' element={<Compare />} />
        <Route path='/create' element={<Create />} />
        <Route path='/quiz' element={<Quiz />} />
      </Routes>
  );
}

export default App;
