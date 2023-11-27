import React from "react";
import './bar.css';
import { Bar } from "./bar";

export function Bars(stats, percentileGroup){

    var statistics =  stats.stats;
    console.log(statistics)


    return(
        <div className="bar-collection">
            <div className="bar-info">
                Expected Goals per 90
                <Bar props={statistics.standard_stats.xG90}/>
            </div>
            <div className="bar-info">
                Non-penalty xG per 90
                <Bar props={statistics.standard_stats.nonPenXG90}/>
            </div>
            <div className="bar-info">
                Goals per 90
                <Bar props={statistics.standard_stats.goals90}/>
            </div>
            <div className="bar-info">
                Non-penalty Goals per 90
                <Bar props={statistics.standard_stats.nonPenGoals90}/>
            </div>
            <div className="bar-info">
                Goals minus xG
                <Bar props={statistics.shooting_stats.goalsMinusXG}/>
            </div>
            <div className="bar-info">
                Goals minus Non-penalty xG
                <Bar props={statistics.shooting_stats.nonPenGoalsMinusXG}/>
            </div>
            <div className="bar-info">
                Non-penalty xG per Shot
                <Bar props={statistics.shooting_stats.nonPenXGPerShot90}/>
            </div>
            <div className="bar-info">
                Shots per 90
                <Bar props={statistics.shooting_stats.shots90}/>
            </div>
            <div className="bar-info">
                Shots on Target per 90
                <Bar props={statistics.shooting_stats.shotOnTarget90}/>
            </div>
            <div className="bar-info">
                Avg. Shot Distance from Goal
                <Bar props={statistics.shooting_stats.avgShotDistance}/>
            </div>
        </div>
    )
}