import React from "react";
import './bar.css';
import { Bar } from "./bar";

export function PassingBars(stats, percentileGroup){

    var statistics =  stats.stats;

    return(
        <div className="bar-collection">
            <div>Passing</div>
            <div className="bar-info">
                <div className="bar-title">Passes Attempted per 90</div>
                <Bar props={statistics.passing_stats.passesAttempted90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Passes Completed per 90</div>
                <Bar props={statistics.passing_stats.passesCompleted90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Long Passes Attempted per 90</div>
                <Bar props={statistics.passing_stats.longPassesAttempted90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Long Passes Completed per 90</div>
                <Bar props={statistics.passing_stats.longPassesCompleted90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Medium Passes Attempted per 90</div>
                <Bar props={statistics.passing_stats.mediumPassesAttempted90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Medium Passes Completed per 90</div>
                <Bar props={statistics.passing_stats.mediumPassesCompleted90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Short Passes Attempted per 90</div>
                <Bar props={statistics.passing_stats.shortPassesAttempted90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Short Passes Completed per 90</div>
                <Bar props={statistics.passing_stats.shortPassesCompleted90} percentileGroup={stats.percentileGroup}/>
            </div>
        </div>
    )
}