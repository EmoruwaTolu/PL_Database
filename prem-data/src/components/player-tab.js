import React from 'react';
import '../styles.css';

export const teamColours = [
    ["Arsenal", "#EF0107"],
    ["Liverpool", "#C8102E"],
    ["Manchester United", "#DA291C"],
    ["Manchester City", "#6CABDD"],
    ["Chelsea", "#034694"],
    ["Brighton and Hove Albion", "#005DAA"],
    ["Newcastle United", "#000000"],
    ["Tottenham Hotspur", "#132257"],
    ["Aston Villa", "#670E36"],
    ["Brentford", "#E30613"],
    ["Fulham", "#000000"],
    ["Crystal Palace", ["#1B458F", "#C4122E"]],
    ["Wolverhampton Wanderers", "#FDB913"],
    ["West Ham United", "#7A263A"],
    ["AFC Bournemouth", ["#DA291C", "#000000"]],
    ["Nottingham Forest", "#DD0000"],
    ["Everton", "#003399"],
    ["Leicester City", "#003090"],
    ["Leeds United", ["#FFCD00", "#1D428A"]],
    ["Southampton", "#D71920"]
] 

export const PlayerTab = ({player}) => {

    return(
        <div className='player-card' style={{border: "1px solid green", width:"100%", height: "100%", borderRadius: "8px", backgroundColor:"white", boxSizing: "border-box", display:"flex", alignItems: "center"}}>
            <img src='https://fbref.com/req/202302030/images/headshots/bc7dc64d_2022.jpg' style={{width: "30%", height:"100%", borderRadius:"8px"}}/>
        </div>
    )

}