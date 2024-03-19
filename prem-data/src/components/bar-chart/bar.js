import React from "react";
import './bar.css';

export function Bar(props, percentileGroup){
    
    var stats = props.props;

    var colour = perc2color(stats[props.percentileGroup]);

    var percentileAlignment = "left";

    if(stats[props.percentileGroup] <= 14){
        percentileAlignment = "center"
    }

    return(
        <div className="bar">
            <div className="value">{stats[0]}</div>
            <div className="outer-bar">
                <div className="inner-bar" style={{width:`${stats[props.percentileGroup]}%`, backgroundColor: `${colour}`, justifyContent: `${percentileAlignment}`}}>
                    <div>{stats[props.percentileGroup]}</div>
                </div>
            </div>
        </div>
    )
}

//The function aims to give the statistics a colour based on it's percentage - red(really bad) green(really good)
function perc2color(perc) {
    var r, g, b = 0;
    if(perc < 50) {
        r = 255;
        g = Math.round(5.1 * perc);
    }
    else {
        g = 255;
        r = Math.round(510 - 5.10 * perc);
    }

    //The if block below is used to make our colours a slightly darker shade to improve contrast and user visibility
    if(r !== 0){
        r -= Math.round(r*0.1)
    }
    if(g !== 0){
        g -= Math.round(g*0.1)
    }
    if(b !== 0){
        b -= Math.round(b*0.1)
    }
    var h = r * 0x10000 + g * 0x100 + b * 0x1;
    return ('#' + ('000000' + h.toString(16)).slice(-6));
}