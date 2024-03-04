import React from "react";
import './bar.css';
import { Bar } from "./bar";

export function CreationBars(stats, percentileGroup){

    var statistics =  stats.stats;

    return(
        <div className="bar-collection">
            <div className="bar-info">
                <div className="bar-title">Expected Assists per 90</div>
                <Bar props={statistics.xAG} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Assists per 90</div>
                <Bar props={statistics.nonPenXG90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Key Passes per 90</div>
                <Bar props={statistics.keyPasses90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Goal Creating Actions per 90</div>
                <Bar props={statistics.goalCreateAct90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Goal Creating Actions from Live Balls per 90</div>
                <Bar props={statistics.liveBallGoalCreateAct90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Goal Creating Actions from Dead Balls per 90</div>
                <Bar props={statistics.deadBallGoalCreateAct90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Goal Creating Actions from Take-ons per 90</div>
                <Bar props={statistics.takeOnGoalCreateAct90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Shot Creating Actions per 90</div>
                <Bar props={statistics.shotCreateAct90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Shot Creating Actions from Live Balls per 90</div>
                <Bar props={statistics.liveBallShotCreateAct90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Shot Creating Actions from Dead Balls per 90</div>
                <Bar props={statistics.deadBallShotCreateAct90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Shot Creating Actions from Take-ons per 90</div>
                <Bar props={statistics.takeOnShotCreateAct90} percentileGroup={stats.percentileGroup}/>
            </div>
        </div>
    )
}