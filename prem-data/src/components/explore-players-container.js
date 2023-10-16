import React from "react";
import { PlayerTab } from "./player-tab";
import "../styles.css";


export const ExplorePlayersContainer = ({players}) => {

    if(players.length === 0){
        return <div>Loading data ...</div>
    }

    console.log(players)

    return(
        <div className="player-container" >
            <PlayerTab player={players[0]}/>
            <PlayerTab player={players[1]}/>
            <PlayerTab player={players[2]}/>
        </div>
    )
}