import React from 'react';
import '../styles.css';
import { useNavigate } from 'react-router-dom';

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

    const history = useNavigate();

    const handleClick = (player) => {
        history(`/player/${player.standard_stats.name}`)
    }

    return(
        <div className='player-card' onClick={() => {handleClick(player)}}>
            <img src={player.image}/>
        </div>
    )

}