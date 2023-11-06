import React, {useEffect, useState} from "react";
import { ExplorePlayersContainer } from "./explore-players-container";
import '../styles.css';

export const RecommendPlayers = ({title}) => {

    const [randomPlayers, setRandomPlayers] = useState([]);

    const fetchData = async () => {

        try{
            const response = await fetch(`http://localhost:3001/explore-players`);
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
                <div style={{width: "100%", color: "#D8D8D8", 
                alignItems:"top", display:"flex", fontSize: "1.5em", borderBottom: "2px solid  #888888", 
                padding:"0.25em", boxSizing:"border-box", fontWeight: "400"}}>
                    {title}
                </div>
                <ExplorePlayersContainer players={randomPlayers}/>
        </div>
    )
}