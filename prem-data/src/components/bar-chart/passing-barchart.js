import React from "react";
import './bar.css';
import { Bar } from "./bar";

export function PassingBars(stats, percentileGroup){

    var statistics =  stats.stats;

    return(
        <div className="bar-collection">
            <div className="bar-info">
                <div className="bar-title">Passes Attempted per 90</div>
                <Bar props={statistics.passesAttempted90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Passes Completed per 90</div>
                <Bar props={statistics.passesCompleted90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Long Passes Attempted per 90</div>
                <Bar props={statistics.longPassesAttempted90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Long Passes Completed per 90</div>
                <Bar props={statistics.longPassesCompleted90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Medium Passes Attempted per 90</div>
                <Bar props={statistics.mediumPassesAttempted90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Medium Passes Completed per 90</div>
                <Bar props={statistics.mediumPassesCompleted90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Short Passes Attempted per 90</div>
                <Bar props={statistics.shortPassesAttempted90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Short Passes Completed per 90</div>
                <Bar props={statistics.shortPassesCompleted90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Crosses per 90</div>
                <Bar props={statistics.crosses90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Switches per 90</div>
                <Bar props={statistics.switches90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Passes Offside per 90</div>
                <Bar props={statistics.passesOffside90} percentileGroup={stats.percentileGroup}/>
            </div>
        </div>
    )
}