import React from "react";
import './bar.css';
import { Bar } from "./bar";

export function ProgressionBars(stats, percentileGroup){

    var statistics =  stats.stats;

    return(
        <div className="bar-collection">
            <div className="player-stat-header">Ball Progression</div>
            <div className="bar-info">
                <div className="bar-title">Progressive Carries per 90</div>
                <Bar props={statistics.standard_stats.progCarries90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Carries per 90</div>
                <Bar props={statistics.possession_stats.carries90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Carries into Final 3rd per 90</div>
                <Bar props={statistics.possession_stats.carriesIntoFinal3rd90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Carries into Penalty Area per 90</div>
                <Bar props={statistics.possession_stats.carriesIntoPenArea90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Progressive Carrying Distance per 90</div>
                <Bar props={statistics.possession_stats.progressiveCarryingDistance90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Progressive Passes per 90</div>
                <Bar props={statistics.standard_stats.progressivePass90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Through Balls per 90</div>
                <Bar props={statistics.pass_types.throughBalls90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Progressive Passes Received per 90</div>
                <Bar props={statistics.standard_stats.progPassRec90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Passes Received per 90</div>
                <Bar props={statistics.possession_stats.passesReceived90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Passes into Final 3rd per 90</div>
                <Bar props={statistics.passing_stats.passesFinalThird90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Passes into Penalty Area per 90</div>
                <Bar props={statistics.passing_stats.passesPenaltyArea90} percentileGroup={stats.percentileGroup}/>
            </div>
            
        </div>
    )
}