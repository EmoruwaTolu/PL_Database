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
        <div className="trending" >
                <div style={{width: "100%", height: "20%", color: "#495867", alignItems:"center", display:"flex", fontSize: "1.5em", borderBottom: "1px solid #495867"}}>
                    {title}
                </div>
                <ExplorePlayersContainer players={randomPlayers}/>
        </div>
    )
}