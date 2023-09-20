import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

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
        <div>
            <h1>{player.playerName}</h1>
            <div>{playerInfo[0].position}</div>
        </div>
    )
}

export default PlayerPage;