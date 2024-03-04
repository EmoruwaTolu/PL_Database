import React from "react";
import './bar.css';
import { Bar } from "./bar";

export function ProgressionBars(stats, percentileGroup){

    var statistics =  stats.stats;

    return(
        <div className="bar-collection">
            <div className="bar-info">
                <div className="bar-title">Progressive Carries per 90</div>
                <Bar props={statistics.progCarries90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Carries per 90</div>
                <Bar props={statistics.carries90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Carries into Final 3rd per 90</div>
                <Bar props={statistics.carriesIntoFinal3rd90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Carries into Penalty Area per 90</div>
                <Bar props={statistics.carriesIntoPenArea90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Progressive Carrying Distance per 90</div>
                <Bar props={statistics.progressiveCarryingDistance90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Progressive Passes per 90</div>
                <Bar props={statistics.progressivePass90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Through Balls per 90</div>
                <Bar props={statistics.throughBalls90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Progressive Passes Received per 90</div>
                <Bar props={statistics.progPassRec90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Passes Received per 90</div>
                <Bar props={statistics.passesReceived90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Passes into Final 3rd per 90</div>
                <Bar props={statistics.passesFinalThird90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Passes into Penalty Area per 90</div>
                <Bar props={statistics.passesPenaltyArea90} percentileGroup={stats.percentileGroup}/>
            </div>
            
        </div>
    )
}