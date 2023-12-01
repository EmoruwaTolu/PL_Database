import React from "react";
import './bar.css';
import { Bar } from "./bar";

export function ScoringBars(stats, percentileGroup){

    var statistics =  stats.stats;

    return(
        <div className="bar-collection">
            <div>Goal Scoring</div>
            <div className="bar-info">
                <div className="bar-title">Expected Goals per 90</div>
                <Bar props={statistics.standard_stats.xG90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Non-penalty xG per 90</div>
                <Bar props={statistics.standard_stats.nonPenXG90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Goals per 90</div>
                <Bar props={statistics.standard_stats.goals90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Non-penalty Goals per 90</div>
                <Bar props={statistics.standard_stats.nonPenGoals90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Goals minus xG</div>
                <Bar props={statistics.shooting_stats.goalsMinusXG} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Goals minus Non-penalty xG</div>
                <Bar props={statistics.shooting_stats.nonPenGoalsMinusXG} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Non-penalty xG per Shot</div>
                <Bar props={statistics.shooting_stats.nonPenXGPerShot90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Shots per 90</div>
                <Bar props={statistics.shooting_stats.shots90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Shots on Target per 90</div>
                <Bar props={statistics.shooting_stats.shotOnTarget90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Avg. Shot Distance from Goal</div>
                <Bar props={statistics.shooting_stats.avgShotDistance} percentileGroup={stats.percentileGroup}/>
            </div>
        </div>
    )
}