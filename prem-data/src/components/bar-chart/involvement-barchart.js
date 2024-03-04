import React from "react";
import './bar.css';
import { Bar } from "./bar";

export function InvolvementBars(stats, percentileGroup){

    var statistics =  stats.stats;

    return(
        <div className="bar-collection">
            <div className="bar-info">
                <div className="bar-title">Touches per 90</div>
                <Bar props={statistics.touches90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Touches in Attacking Penalty Area per 90</div>
                <Bar props={statistics.touchesInAttackPenArea90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Touches in Attacking 3rd per 90</div>
                <Bar props={statistics.touchesInAttack3rd90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Touches in Middle 3rd per 90</div>
                <Bar props={statistics.touchesInMiddle3rd90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Touches in Defensive 3rd per 90</div>
                <Bar props={statistics.touchesInDef3rd90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Ball Recoveries per 90</div>
                <Bar props={statistics.ballRecoveries90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Successful Take-ons per 90</div>
                <Bar props={statistics.successfulTakeOns90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Take-ons Attempted per 90</div>
                <Bar props={statistics.takeOnsAttempted90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Fouls Drawn per 90</div>
                <Bar props={statistics.foulsDrawn90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Fouls Committed per 90</div>
                <Bar props={statistics.foulsCommitted90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Times dispossessed per 90</div>
                <Bar props={statistics.dispossessed90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Miscontrols per 90</div>
                <Bar props={statistics.miscontrols90} percentileGroup={stats.percentileGroup}/>
            </div>
            <div className="bar-info">
                <div className="bar-title">Errors per 90</div>
                <Bar props={statistics.errors90} percentileGroup={stats.percentileGroup}/>
            </div>
        </div>
    )
}