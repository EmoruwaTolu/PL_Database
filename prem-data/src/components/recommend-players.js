import React from "react";
import { PlayerTab } from "./player-tab";
import '../styles.css';

export const RecommendPlayers = ({title}) => {

    console.log(title)

    return(
        <div className="trending" >
                <div style={{width: "100%", height: "20%", color: "#495867", alignItems:"center", display:"flex", fontSize: "1.5em", borderBottom: "1px solid #495867"}}>
                    {title}
                </div>
                <div className="player-container" style={{width: "100%", height:"80%", display: "flex", justifyContent:"space-between", alignItems: "center"}}>
                    <PlayerTab player={""}/>
                    <PlayerTab player={""}/>
                    <PlayerTab player={""}/>
                </div>
        </div>
    )
}