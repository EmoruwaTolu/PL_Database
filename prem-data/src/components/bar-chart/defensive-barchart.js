import React from "react";
import './bar.css';
import { Bar } from "./bar";

export function DefensiveBars(stats, percentileGroup){

    var statistics =  stats.stats;

    return(
        <div className="bar-collection">
            <div className="bar-info">
                <div className="bar-title">Tackles and Interceptions per 90</div>
                <Bar props={statistics.tacklesAndInterceptions90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Tackles Attempted per 90</div>
                <Bar props={statistics.tacklesAttempted90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Tackles Won per 90</div>
                <Bar props={statistics.tacklesWon90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Tackles in Attacking 3rd per 90</div>
                <Bar props={statistics.tacklesInAttack3rd90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Tackles in Middle 3rd per 90</div>
                <Bar props={statistics.tacklesInMiddle3rd90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Tackles in Defensive 3rd per 90</div>
                <Bar props={statistics.tacklesInDef3rd90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Interceptions per 90</div>
                <Bar props={statistics.interceptions90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Dribblers Challenged per 90</div>
                <Bar props={statistics.dribblersChallenged90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Dribblers Tackled per 90</div>
                <Bar props={statistics.dribblersTackled90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Challenges Lost per 90</div>
                <Bar props={statistics.challengesLost90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Aerials Won per 90</div>
                <Bar props={statistics.aerialsWon90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Aerials Lost per 90</div>
                <Bar props={statistics.aerialsLost90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Blocks per 90</div>
                <Bar props={statistics.blocks90} percentileGroup={stats.percentileGroup}/>
            </div>
        </div>
    )
}