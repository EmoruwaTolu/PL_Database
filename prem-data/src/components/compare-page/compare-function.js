import React from "react";
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';


const normalizeNames = {'Expected Goals per 90': 'xG90',
'Non-penalty xG per 90': 'nonPenXGPerShot90',
'Goals per 90' : 'goals90',
'Non-penalty Goals per 90': 'nonPenGoals90',
'Goals minus xG': 'goalsMinusXG',
'Goals minus Non-penalty xG':'nonPenGoalsMinusXG',
'Non-penalty xG per Shot':'nonPenXGPerShot90',
'Shots per 90':'shots90',
'Shots on Target per 90':'shotOnTarget90',
'Avg. Shot Distance from Goal':'avgShotDistance',
'Expected Assists per 90':'xA90',
'Assists per 90':'assists90',
'Key Passes per 90':'keyPasses90',
'Goal Creating Actions per 90':'goalCreateAct90',
'Goal Creating Actions from Live Balls per 90':'liveBallGoalCreateAct90',
'Goal Creating Actions from Dead Balls per 90':'deadBallGoalCreateAct90',
'Goal Creating Actions from Take-ons per 90':'takeOnGoalCreateAct90',
'Shot Creating Actions per 90': 'shotCreateAct90',
'Shot Creating Actions from Live Balls per 90':'liveBallShotCreateAct90',
'Shot Creating Actions from Dead Balls per 90':'deadBallShotCreateAct90',
'Shot Creating Actions from Take-ons per 90':'takeOnShotCreateAct90',
'Progressive Carries per 90':'progCarries90',
'Carries per 90':'carries90',
'Carries into Final 3rd per 90':'carriesIntoFinal3rd90',
'Carries into Penalty Area per 90':'carriesIntoPenArea90',
'Progressive Carrying Distance per 90':'progressiveCarryingDistance90',
'Progressive Passes per 90':'progressivePass90',
'Through Balls per 90':'throughBalls90',
'Progressive Passes Received per 90':'progPassRec90',
'Passes Received per 90':'passesReceived90',
'Passes into Final 3rd per 90':'passesReceived90',
'Passes into Penalty Area per 90':'passesPenaltyArea90',
'Touches per 90':'touches90',
'Touches in Attacking Penalty Area per 90':'touchesInAttackPenArea90',
'Touches in Attacking 3rd per 90':'touchesInAttack3rd90',
'Touches in Middle 3rd per 90':'touchesInMiddle3rd90',
'Touches in Defensive 3rd per 90':'touchesInDef3rd90',
'Ball Recoveries per 90':'ballRecoveries90',
'Successful Take-ons per 90':'successfulTakeOns90',
'Fouls Drawn per 90':'foulsDrawn90',
'Take-ons Attempted per 90':'takeOnsAttempted90',
'Fouls Committed per 90':'foulsCommitted90',
'Times dispossessed per 90':'dispossessed90',
'Miscontrols per 90':'miscontrols90',
'Errors per 90':'errors90',
'Passes Attempted per 90':'passesAttempted90',
'Passes Completed per 90':'passesCompleted90',
'Long Passes Attempted per 90':'longPassesAttempted90',
'Long Passes Completed per 90':'longPassesCompleted90',
'Medium Passes Attempted per 90':'mediumPassesAttempted90',
'Medium Passes Completed per 90':'mediumPassesCompleted90',
'Short Passes Attempted per 90':'shortPassesAttempted90',
'Short Passes Completed per 90':'shortPassesCompleted90',
'Crosses per 90':'crosses90',
'Switches per 90':'switches90',
'Passes Offside per 90':'passesOffside90',
'Tackles and Interceptions per 90':'tacklesAndInterceptions90',
'Tackles Attempted per 90':'tacklesAttempted90',
'Tackles Won per 90':'tacklesWon90',
'Tackles in Attacking 3rd per 90':'tacklesInAttack3rd90',
'Tackles in Middle 3rd per 90':'tacklesInMiddle3rd90',
'Tackles in Defensive 3rd per 90':'tacklesInDef3rd90',
'Interceptions per 90':'interceptions90',
'Dribblers Challenged per 90':'dribblersChallenged90',
'Dribblers Tackled per 90':'dribblersTackled90',
'Challenges Lost per 90':'challengesLost90',
'Aerials Won per 90':'aerialsWon90',
'Aerials Lost per 90':'aerialsLost90',
'Blocks per 90':'blocks90'
}

const findNestedField = (obj, targetField) => {
    for (const key in obj) {
        if (key === targetField) {
            return obj[key][0];
        } 
        else if (typeof obj[key] === 'object') {
            const result = findNestedField(obj[key], targetField);
            if (result !== undefined) {
                return result;
            }
        }
    }
    return undefined; // Field not found
};

export default function RadarAxisMaker({player1, player2, attributes, }){

    var playerChartList = [];

    if(player1 !== undefined && player2 !== undefined){
        for(let i=0; i<attributes.length; i++){

            var p1 = findNestedField(player1, normalizeNames[attributes[i]]);
            var p2 = findNestedField(player2, normalizeNames[attributes[i]]);
    
            playerChartList.push({subject: attributes[i], A : p1, B : p2})
        }
    }

    
    return (
        <div className="radar-chart">
            {player1 && player2 && attributes.length > 2 && <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={playerChartList}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis />
                    <Radar name={player1.name} dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                    <Radar name={player2.name} dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                    <Legend />
                </RadarChart>
            </ResponsiveContainer>}
        </div>
    );
}