import React from 'react';
import '../styles.css';
import { useNavigate } from 'react-router-dom';

export const teamColours = {
    "Arsenal": "#EF0107",
    "Liverpool": "#C8102E",
    "Manchester Utd": "#DA291C",
    "Manchester City": "#6CABDD",
    "Chelsea": "#034694",
    "Brighton": "#005DAA",
    "Newcastle United": "#000000",
    "Tottenham": "#132257",
    "Aston Villa": "#670E36",
    "Brentford": "#E30613",
    "Fulham": "#000000",
    "Crystal Palace": "#1B458F",
    "Wolves": "#FDB913",
    "West Ham": "#7A263A",
    "Bournemouth": "#DA291C",
    "Nott'ham Forest": "#DD0000",
    "Everton": "#003399",
    "Leicester City": "#003090",
    "Leeds United": "#FFCD00",
    "Southampton": "#D71920"
}
export const PlayerTab = ({player}) => {

    const history = useNavigate();

    const handleClick = (player) => {
        history(`/player/${player.standard_stats.name}`)
    }

    return(
        <div className='player-card' onClick={() => {handleClick(player)}}>
            <img src={player.image}/>
            <div className='player-info'>
                <p className='player-name'>{player.name}</p>
                <p className='club-name'>{player.club}</p>
            </div>
        </div>
    )

}