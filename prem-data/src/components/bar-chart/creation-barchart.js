import React from "react";
import './bar.css';
import { Bar } from "./bar";

export function CreationBars(stats, percentileGroup){

    var statistics =  stats.stats;

    return(
        <div className="bar-collection">
            <div className="player-stat-header">Chance Creation</div>
            <div className="bar-info">
                <div className="bar-title">Expected Assists per 90</div>
                <Bar props={statistics.standard_stats.xAG} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Assists per 90</div>
                <Bar props={statistics.standard_stats.nonPenXG90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Key Passes per 90</div>
                <Bar props={statistics.passing_stats.keyPasses90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Goal Creating Actions per 90</div>
                <Bar props={statistics.shot_goalCreation.goalCreateAct90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Goal Creating Actions from Live Balls per 90</div>
                <Bar props={statistics.shot_goalCreation.liveBallGoalCreateAct90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Goal Creating Actions from Dead Balls per 90</div>
                <Bar props={statistics.shot_goalCreation.deadBallGoalCreateAct90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Goal Creating Actions from Take-ons per 90</div>
                <Bar props={statistics.shot_goalCreation.takeOnGoalCreateAct90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Shot Creating Actions per 90</div>
                <Bar props={statistics.shot_goalCreation.shotCreateAct90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Shot Creating Actions from Live Balls per 90</div>
                <Bar props={statistics.shot_goalCreation.liveBallShotCreateAct90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Shot Creating Actions from Dead Balls per 90</div>
                <Bar props={statistics.shot_goalCreation.deadBallShotCreateAct90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Shot Creating Actions from Take-ons per 90</div>
                <Bar props={statistics.shot_goalCreation.takeOnShotCreateAct90} percentileGroup={stats.percentileGroup}/>
            </div>
        </div>
    )
}