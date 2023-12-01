import React from "react";
import './bar.css';
import { Bar } from "./bar";

export function InvolvementBars(stats, percentileGroup){

    var statistics =  stats.stats;

    return(
        <div className="bar-collection">
            <div>Ball Security</div>
            <div className="bar-info">
                <div className="bar-title">Successful Take-ons per 90</div>
                <Bar props={statistics.possession_stats.successfulTakeOns90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Take-ons Attempted per 90</div>
                <Bar props={statistics.possession_stats.takeOnsAttempted90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Successful Take-on percent</div>
                <Bar props={statistics.possession_stats.successfulTakeOnPercent} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Times dispossessed per 90</div>
                <Bar props={statistics.possession_stats.dispossessed90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Miscontrols per 90</div>
                <Bar props={statistics.possession_stats.miscontrols90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div>Involvement</div>
            <div className="bar-info">
                <div className="bar-title">Touches per 90</div>
                <Bar props={statistics.possession_stats.touches90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Touches in Attacking Penalty Area per 90</div>
                <Bar props={statistics.possession_stats.touchesInAttackPenArea90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Touches in Attacking 3rd per 90</div>
                <Bar props={statistics.possession_stats.touchesInAttack3rd90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Touches in Middle 3rd per 90</div>
                <Bar props={statistics.possession_stats.touchesInMiddle3rd90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Touches in Defensive 3rd per 90</div>
                <Bar props={statistics.possession_stats.touchesInDef3rd90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Passes Received per 90</div>
                <Bar props={statistics.possession_stats.passesReceived90} percentileGroup={stats.percentileGroup}/>
            </div>
        </div>
    )
}