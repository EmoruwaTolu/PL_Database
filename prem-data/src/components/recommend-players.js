import React, {useEffect, useState} from "react";
import { ExplorePlayersContainer } from "./explore-players-container";
import '../styles.css';

export const RecommendPlayers = ({title}) => {

    const [randomPlayers, setRandomPlayers] = useState([]);

    const fetchData = async () => {

        try{
            const response = await fetch(`https://pl-database.onrender.com/explore-players`);
            const data = await response.json();
            setRandomPlayers(data);
        }
        catch(error){
            console.error('Error fetching players');
        }
        
    }

    useEffect(() => {
        fetchData('');
    }, []);

    return(
        <div className="explore" >
                <div style={{width: "100%", color: "#343a40", 
                alignItems:"top", display:"flex", fontSize: "1.5em", borderBottom: "1px solid #343a40", 
                padding:"0.25em", boxSizing:"border-box"}}>
                    {title}
                </div>
                <ExplorePlayersContainer players={randomPlayers}/>
        </div>
    )
}