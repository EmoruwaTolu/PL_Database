import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import PlayerPageBody from "./player-page-body/player-page-body";
import axios from 'axios';
import './page-style.css';

function PlayerPage() {

    const player = useParams();

    const [playerInfo, setPlayerInfo] = useState([]);

    useEffect(() => {
        if (player) {
          axios.get(`/player/${player.playerName}`)
            .then(response => {
              setPlayerInfo(response.data);
            })
            .catch(error => {
              console.error("Error fetching player data:", error);
            });
        }
    }, [player]);
    
    console.log(playerInfo)

    if (playerInfo.length === 0) {
        return <p>Loading player data...</p>;
    }

    return(
        <div className="player-page">
          <div className="player-page-container">
            <div className="player-header">
              <img src={playerInfo[0].image}/>
              <div className="player-page-info">
                <p className="player-name">{player.playerName}</p>
                <p className="player-page-club">{playerInfo[0].club}</p>
                <p className="player-page-position">{playerInfo[0].position}</p>
              </div>
            </div>
            <div className="player-page-body">
              <PlayerPageBody player={playerInfo[0]}/>
            </div>
          </div>
        </div>
    )
}

export default PlayerPage;