import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import PlayerPage from './pages/player-page';
import Compare from './pages/compare';

function App() {

  const [players, setPlayers] = useState([]);

  const handlePositionClick = async (position) => {
    const response = await fetch(`http://localhost:3001/PremierLeague2022-21Big6/${position}`);
    const data = await response.json();
    setPlayers(data);
  };

  return (
    // <div className="App">
    //   <button onClick={() => handlePositionClick('Attackers')}>Attackers</button>
    //   <button onClick={() => handlePositionClick('Midfielders')}>Midfielders</button>
    //   <button onClick={() => handlePositionClick('Fullbacks')}>Fullbacks</button>
    //   <button onClick={() => handlePositionClick('Centrebacks')}>Centrebacks</button>
    //   <button>Goalkeepers</button>
    //   <ul>
    //     {/* Render the list of players */}
    //     {players.map((player) => (
    //       <li key={player._id}>{player.name} ({player.club})</li>
    //     ))}
    //   </ul>
    // </div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/player/:playerName' element={<PlayerPage />}/>
        <Route path='/compare' element={<Compare />} />
      </Routes>
  );
}

export default App;
