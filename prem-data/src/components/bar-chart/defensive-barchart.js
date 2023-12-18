import React from "react";
import './bar.css';
import { Bar } from "./bar";

export function DefensiveBars(stats, percentileGroup){

    var statistics =  stats.stats;

    return(
        <div className="bar-collection">
            <div>Defensive Work</div>
            <div className="bar-info">
                <div className="bar-title">Tackles and Interceptions per 90</div>
                <Bar props={statistics.defensive_stats.tacklesAndInterceptions90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Tackles Attempted per 90</div>
                <Bar props={statistics.defensive_stats.tacklesAttempted90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Tackles Won per 90</div>
                <Bar props={statistics.defensive_stats.tacklesWon90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Tackles in Attacking 3rd per 90</div>
                <Bar props={statistics.defensive_stats.tacklesInAttack3rd90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Tackles in Middle 3rd per 90</div>
                <Bar props={statistics.defensive_stats.tacklesInMiddle3rd90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Tackles in Defensive 3rd per 90</div>
                <Bar props={statistics.defensive_stats.tacklesInDef3rd90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Interceptions per 90</div>
                <Bar props={statistics.defensive_stats.interceptions90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Dribblers Challenged per 90</div>
                <Bar props={statistics.defensive_stats.dribblersChallenged90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Dribblers Tackled per 90</div>
                <Bar props={statistics.defensive_stats.dribblersTackled90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Challenges Lost per 90</div>
                <Bar props={statistics.defensive_stats.challengesLost90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Aerials Won per 90</div>
                <Bar props={statistics.other_stats.aerialsWon90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Aerials Lost per 90</div>
                <Bar props={statistics.other_stats.aerialsLost90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Blocks per 90</div>
                <Bar props={statistics.defensive_stats.blocks90} percentileGroup={stats.percentileGroup}/>
            </div>
        </div>
    )
}