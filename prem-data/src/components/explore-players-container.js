import React from "react";
import { PlayerTab } from "./player-tab";


export const ExplorePlayersContainer = ({players}) => {

    if(players.length === 0){
        return <div>Loading data ...</div>
    }

    console.log(players)

    return(
        <div className="player-container" style={{width: "100%", height:"80%", display: "flex", justifyContent:"space-between", alignItems: "center"}}>
            <PlayerTab player={players[0]}/>
            <PlayerTab player={players[1]}/>
            <PlayerTab player={players[2]}/>
        </div>
    )
}