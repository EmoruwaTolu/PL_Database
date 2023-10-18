import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import './compare-player-section.css';
import Autocompletion from "./autocomplete";

const ComparePlayerSection = ({setPlayer}) => {
    
    const [playerInfo, setplayerInfo] = useState([]);
    const [suggestedPlayers, setSuggestedPlayers] = useState([]);

    const fetchData = async (value) => {
        const response = await fetch(`http://localhost:3001/searchSuggest`);
        const data = await response.json();

        const filtered = data.filter((player) => {
            return player && player.name && player.name.toLowerCase().includes(value.toLowerCase()) 
        })

        setSuggestedPlayers(filtered);
    }

    const handleChange = (value) => {
        setPlayer(value);
        fetchData(value);
    }

    return(
        <div className="compare-player-input">
           <Autocompletion setPlayer={setPlayer}/>
        </div>
    )
}

export default ComparePlayerSection;