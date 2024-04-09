import React from "react";

function PlayerPageHeader(props){

    if(props.props === undefined){
        return <p>Loading player data...</p>;
    }

    return(
        <div className="player-header">
            <img src={props.props.data.image}/>
            <div className="player-page-info">
                <p className="player-name">{props.props.data.name}</p>
                <p className="player-page-club">{props.props.data.club}</p>
                <p className="player-page-position">{props.props.data.position}</p>
                <p className="player-page-position">{props.props.data.season}</p>
            </div>
        </div>
    )
}

export default PlayerPageHeader;