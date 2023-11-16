export function makePositionReadable(position){
    if(position === "MF"){
        return "Midfielder";
    }
    else if(position === "AM"){
        return "Att. Midfielder";
    }
    else if(position === "CB"){
        return "Centre-Back";
    }
    else if(position === "FB"){
        return "Full-Back";
    }
    else if(position === "FW"){
        return "Forward";
    }
}

export function playerCardDisplayLabels(position, playerInfo, positionInArray){

    if(position === "FW" || position === "AM"){
        var positionData = [
            playerInfo.standard_stats.nonPenXG90[positionInArray],
            playerInfo.standard_stats.goals90[positionInArray],
            playerInfo.shooting_stats.nonPenGoalsMinusXG[positionInArray],
            playerInfo.shooting_stats.shots90[positionInArray],
    
            playerInfo.shot_goalCreation.shotCreateAct90[positionInArray],
            playerInfo.passing_stats.keyPasses90[positionInArray],
            playerInfo.passing_stats.xA90[positionInArray],
            playerInfo.standard_stats.assists90[positionInArray],
    
            playerInfo.standard_stats.progressivePass90[positionInArray],
            playerInfo.standard_stats.progCarries90[positionInArray],
            playerInfo.passing_stats.passesPenaltyArea90[positionInArray],
            playerInfo.passing_stats.passesFinalThird90[positionInArray],
    
            playerInfo.possession_stats.successfulTakeOns90[positionInArray],
            playerInfo.possession_stats.takeOnsAttempted90[positionInArray],
            playerInfo.possession_stats.touches90[positionInArray],
            playerInfo.possession_stats.passesReceived90[positionInArray],
            
        ];
        var relevantPositionData = [
            'Non-Penalty Expected Goals', 
            'Goals per 90', 
            'Non-Penalty Goals minus XG', 
            'Shots per 90', 
            'Shot Creating Actions per 90', 
            'Key Passes per 90',
            'Expected Assists per 90',
            'Assists per 90',
            'Progressive Passes per 90',
            'Progressive Carries per 90',
            'Passes into the Penalty Area per 90',
            'Passes into the Final Third per 90',
            'Successful Take-ons per 90',
            'Take-ons Attempted per 90',
            'Fouls Drawn per 90',
            'Touches per 90',
            'Passes Received per 90'
        ];
        return [positionData, relevantPositionData];
    }
    else if(position === "MF"){

        var positionData = [
            playerInfo.standard_stats.nonPenXG90[positionInArray],
            playerInfo.standard_stats.goals90[positionInArray],
            playerInfo.passing_stats.xA90[positionInArray],
            playerInfo.standard_stats.assists90[positionInArray],
    
            playerInfo.shot_goalCreation.shotCreateAct90[positionInArray],
            playerInfo.passing_stats.keyPasses90[positionInArray],
            playerInfo.passing_stats.passesFinalThird90[positionInArray],
            playerInfo.passing_stats.passesPenaltyArea90[positionInArray],
    
            playerInfo.standard_stats.progressivePass90[positionInArray],
            playerInfo.standard_stats.progCarries90[positionInArray],
            playerInfo.possession_stats.passesReceived90[positionInArray],
            playerInfo.possession_stats.touches90[positionInArray],
    
            parseInt(playerInfo.passing_stats.passCompletionPercent[positionInArray]),
            playerInfo.defensive_stats.tacklesAndInterceptions90[positionInArray],
            playerInfo.other_stats.ballRecoveries90[positionInArray],
            playerInfo.possession_stats.dispossessed90[positionInArray],
        ];

        var relevantPositionData = [
            'Non-Penalty Expected Goals', 
            'Goals per 90', 
            'Expected Assists per 90',
            'Assists per 90',

            'Shot Creating Actions per 90', 
            'Key Passes per 90',
            'Passes into the Final Third per 90',
            'Passes into the Penalty Area per 90',

            'Progressive Passes per 90',
            'Progressive Carries per 90',
            'Passes Received per 90',
            'Touches per 90',

            'Pass Completion Percent',
            'Tackles and Interceptions per 90',
            'Ball Recoveries per 90',
            'Times Dispossessed per 90'
        ];
        return [positionData, relevantPositionData];
    }
    else if(position === "FB" || position === "CB"){
        var positionData = [
            playerInfo.standard_stats.nonPenXG90[positionInArray],
            playerInfo.standard_stats.goals90[positionInArray],
            playerInfo.passing_stats.xA90[positionInArray],
            playerInfo.standard_stats.assists90[positionInArray],
    
            playerInfo.standard_stats.progressivePass90[positionInArray],
            playerInfo.standard_stats.progCarries90[positionInArray],
            playerInfo.passing_stats.passesCompleted90[positionInArray],
            parseInt(playerInfo.passing_stats.passCompletionPercent[positionInArray]),
    
            playerInfo.defensive_stats.tacklesAndInterceptions90[positionInArray],
            parseInt(playerInfo.defensive_stats.percentDribblersTackled90[positionInArray]),
            playerInfo.other_stats.ballRecoveries90[positionInArray],
            playerInfo.possession_stats.touches90[positionInArray],
    
            parseInt(playerInfo.other_stats.percentAerialsWon[positionInArray]),
            playerInfo.other_stats.aerialsWon90[positionInArray],
            playerInfo.defensive_stats.errors90[positionInArray],
            playerInfo.possession_stats.dispossessed90[positionInArray],
        ];

        var relevantPositionData = [
            'Non-Penalty Expected Goals', 
            'Goals per 90', 
            'Expected Assists per 90',
            'Assists per 90',

            'Progressive Passes per 90', 
            'Progressive Carries per 90',
            'Passes Completed per 90',
            'Pass Completion Percent',

            'Tackles and Interceptions per 90',
            'Percentage of Dribblers Tackled per 90',
            'Ball Recoveries per 90',
            'Touches per 90',

            'Percentage of Aerials Won',
            'Aerials Won per 90',
            'Errors per 90',
            'Times Dispossessed per 90'
        ];
        return [positionData, relevantPositionData];
    }
}