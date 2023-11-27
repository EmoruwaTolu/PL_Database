import React from "react";
import './bar.css';

export function Bar(props){
    
    var stats = props.props;
    console.log(stats)

    return(
        <div className="bar">
            <div className="value">{stats[0]}</div>
            <div className="jam">
                <div style={{width:`${stats[1]}%`, backgroundColor: "beige", borderRadius: "16px", padding: "0.5em 1em", boxSizing: "border-box"}}>
                    <div>{stats[1]}</div>
                </div>
            </div>
        </div>
    )
}