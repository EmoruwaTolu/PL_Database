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
            playerInfo.nonPenXG90[positionInArray],
            playerInfo.goals90[positionInArray],
            playerInfo.nonPenGoalsMinusXG[positionInArray],
            playerInfo.shots90[positionInArray],
    
            playerInfo.shotCreateAct90[positionInArray],
            playerInfo.keyPasses90[positionInArray],
            playerInfo.xA90[positionInArray],
            playerInfo.assists90[positionInArray],
    
            playerInfo.progressivePass90[positionInArray],
            playerInfo.progCarries90[positionInArray],
            playerInfo.passesPenaltyArea90[positionInArray],
            playerInfo.passesFinalThird90[positionInArray],
    
            playerInfo.successfulTakeOns90[positionInArray],
            playerInfo.takeOnsAttempted90[positionInArray],
            playerInfo.touches90[positionInArray],
            playerInfo.passesReceived90[positionInArray],
            
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
            playerInfo.nonPenXG90[positionInArray],
            playerInfo.goals90[positionInArray],
            playerInfo.xA90[positionInArray],
            playerInfo.assists90[positionInArray],
    
            playerInfo.shotCreateAct90[positionInArray],
            playerInfo.keyPasses90[positionInArray],
            playerInfo.passesFinalThird90[positionInArray],
            playerInfo.passesPenaltyArea90[positionInArray],
    
            playerInfo.progressivePass90[positionInArray],
            playerInfo.progCarries90[positionInArray],
            playerInfo.passesReceived90[positionInArray],
            playerInfo.touches90[positionInArray],
    
            parseInt(playerInfo.passCompletionPercent[positionInArray]),
            playerInfo.tacklesAndInterceptions90[positionInArray],
            playerInfo.ballRecoveries90[positionInArray],
            playerInfo.dispossessed90[positionInArray],
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
            playerInfo.nonPenXG90[positionInArray],
            playerInfo.goals90[positionInArray],
            playerInfo.xA90[positionInArray],
            playerInfo.assists90[positionInArray],
    
            playerInfo.progressivePass90[positionInArray],
            playerInfo.progCarries90[positionInArray],
            playerInfo.passesCompleted90[positionInArray],
            parseInt(playerInfo.passCompletionPercent[positionInArray]),
    
            playerInfo.tacklesAndInterceptions90[positionInArray],
            parseInt(playerInfo.percentDribblersTackled90[positionInArray]),
            playerInfo.ballRecoveries90[positionInArray],
            playerInfo.touches90[positionInArray],
    
            parseInt(playerInfo.percentAerialsWon[positionInArray]),
            playerInfo.aerialsWon90[positionInArray],
            playerInfo.errors90[positionInArray],
            playerInfo.dispossessed90[positionInArray],
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