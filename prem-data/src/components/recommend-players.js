import React from "react";

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

export const RecommendPlayers = ({title}) => {

    console.log(title)

    return(
        <div style={{padding: "4em", width: "100%", boxSizing: "border-box", height:"60vh"}}>
            <div style={{backgroundColor: "#ffe6a7", width: "100%", height:"100%", borderRadius: "8px", padding: "2em", boxSizing: "border-box"}}>
                <div style={{width: "100%", height: "20%", color: "#6f1d1b", alignItems:"center", display:"flex", fontSize: "1.5em", borderBottom: "1px solid #6f1d1b"}}>
                    {title}
                </div>
            </div>
        </div>
    )
}