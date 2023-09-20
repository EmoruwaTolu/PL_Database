const fs = require('fs');
const path = require('path');

class keepingStatistics{
    constructor(
        postShotxGvsGA90,
        goalsAgainst90,
        savePercentage,
        postShotxGvsShotOnTarget90,
        penaltySave,
        cleanSheetPercent,
        touches90,
        launchPercentage,
        goalKicks90,
        avgGoalKickLen,
        crossesStoppedPercent,
        defActionsOutsidePenArea90,
        avgDistofDefActions
    ){
        this.postShotxGvsGA90 = parseFloat(postShotxGvsGA90);
        this.goalsAgainst90 = parseFloat(goalsAgainst90);
        this.savePercentage = savePercentage;
        this.postShotxGvsShotOnTarget90 = parseFloat(postShotxGvsShotOnTarget90);
        this.penaltySave = penaltySave;
        this.cleanSheetPercent = cleanSheetPercent;
        this.touches90 = parseFloat(touches90);
        this.launchPercentage = launchPercentage;
        this.goalKicks90 = parseFloat(goalKicks90);
        this.avgGoalKickLen = parseFloat(avgGoalKickLen);
        this.crossesStoppedPercent = crossesStoppedPercent;
        this.defActionsOutsidePenArea90 = parseFloat(defActionsOutsidePenArea90);
        this.avgDistofDefActions = parseFloat(avgDistofDefActions);
    }
}

class SeasonPerformance{

  constructor(name, club, season, position, standard_stats, shooting_stats, passing_stats, pass_types, shot_goalCreation, defensive_stats,
    possession_stats, other_stats, league){
      this.name = name,
      this.club = club,
      this.season = season,
      this.position = position,
      this.league = league,
      this.standard_stats = standard_stats,
      this.shooting_stats = shooting_stats,
      this.passing_stats = passing_stats,
      this.pass_types = pass_types,
      this.shot_goalCreation = shot_goalCreation,
      this.defensive_stats = defensive_stats,
      this.possession_stats = possession_stats,
      this.other_stats = other_stats
  }
}

class StandardStats{
  constructor(name, club, season, goals90, assists90, goalsAndAssits90, nonPenGoals90, penScored, pensTaken, yellow90, 
    red90, xG90, nonPenXG90, xAG, nonPenXGAG90, progCarries90, progressivePass90, progPassRec90, position, league){
    this.name = name,
    this.club = club,
    this.season = season,
    this.position = position,
    this.league = league,
    this.goals90 = parseFloat(goals90),
    this.assists90 = parseFloat(assists90),
    this.goalsAndAssits90 = parseFloat(goalsAndAssits90),
    this.nonPenGoals90 = parseFloat(nonPenGoals90),
    this.penScored = parseFloat(penScored),
    this.pensTaken = parseFloat(pensTaken),
    this.yellow90 = parseFloat(yellow90),
    this.red90 = parseFloat(red90),
    this.xG90 = parseFloat(xG90),
    this.nonPenXG90 = parseFloat(nonPenXG90),
    this.xAG = parseFloat(xAG),
    this.nonPenXGAG90 = parseFloat(nonPenXGAG90),
    this.progCarries90 = parseFloat(progCarries90),
    this.progressivePass90 = parseFloat(progressivePass90),
    this.progPassRec90 = parseFloat(progPassRec90)
  }
}

class ShootingStats{
  constructor(name, club, season, shots90, shotOnTarget90, shotOnTargetPercent90, goalPerShot90, goalPerShotOnTarget90, 
    avgShotDistance, shotsFreeKicks, nonPenXGPerShot90, goalsMinusXG, nonPenGoalsMinusXG, position, league){
      this.name = name,
      this.club = club,
      this.season = season,
      this.position = position,
      this.league = league,
    this.shots90 = parseFloat(shots90),
    this.shotOnTarget90 = parseFloat(shotOnTarget90),
    this.shotOnTargetPercent90 = shotOnTargetPercent90,
    this.goalPerShot90 = parseFloat(goalPerShot90),
    this.goalPerShotOnTarget90 = parseFloat(goalPerShotOnTarget90),
    this.avgShotDistance = parseFloat(avgShotDistance),
    this.shotsFreeKicks = parseFloat(shotsFreeKicks),
    this.nonPenXGPerShot90 = parseFloat(nonPenXGPerShot90),
    this.goalsMinusXG = goalsMinusXG,
    this.nonPenGoalsMinusXG = nonPenGoalsMinusXG
  }
}

class PassingStats {
  constructor(name, club, season, passesCompleted90, passesAttempted90, passCompletionPercent, totalPassingDistance90, progressivePassingDistance90, 
    shortPassesCompleted90, shortPassesAttempted90, shortPassesCompletionPercent, mediumPassesCompleted90, mediumPassesAttempted90, 
    mediumPassesCompletionPercent, longPassesCompleted90, longPassesAttempted90, longPassesCompletionPercent, xA90, keyPasses90, 
    passesFinalThird90, passesPenaltyArea90, crossesPenaltyArea90, position, league){
      this.name = name,
      this.club = club,
      this.season = season,
      this.position = position,
      this.league = league,
      this.passesCompleted90 = parseFloat(passesCompleted90),
      this.passesAttempted90 = parseFloat(passesAttempted90),
      this.passCompletionPercent = parseFloat(passCompletionPercent),
      this.totalPassingDistance90 = parseFloat(totalPassingDistance90),
      this.progressivePassingDistance90 = parseFloat(progressivePassingDistance90),
      this.shortPassesCompleted90 = parseFloat(shortPassesCompleted90),
      this.shortPassesAttempted90 = parseFloat(shortPassesAttempted90),
      this.shortPassesCompletionPercent = shortPassesCompletionPercent,
      this.mediumPassesCompleted90 = parseFloat(mediumPassesCompleted90),
      this.mediumPassesAttempted90 = parseFloat(mediumPassesAttempted90),
      this.mediumPassesCompletionPercent = mediumPassesCompletionPercent,
      this.longPassesCompleted90 = parseFloat(longPassesCompleted90),
      this.longPassesAttempted90 = parseFloat(longPassesAttempted90),
      this.longPassesCompletionPercent = longPassesCompletionPercent,
      this.xA90 = parseFloat(xA90),
      this.keyPasses90 = parseFloat(keyPasses90),
      this.passesFinalThird90 = parseFloat(passesFinalThird90),
      this.passesPenaltyArea90 = parseFloat(passesPenaltyArea90),
      this.crossesPenaltyArea90 = parseFloat(crossesPenaltyArea90)
  }
}

class PassTypes{
  constructor(name, club, season, liveBallPasses90, deadBallPasses90, freeKickPasses, throughBalls90, switches90, crosses90, throwIns90, cornerKicks90,
    inswingingCorners90, outswingingCorners90, straightCorners90, passesOffside90, passesBlockedByOpp90, position, league){
      this.name = name,
      this.club = club,
      this.season = season,
      this.position = position,
      this.league = league,
      this.liveBallPasses90 = parseFloat(liveBallPasses90),
      this.deadBallPasses90 = parseFloat(deadBallPasses90),
      this.freeKickPasses = parseFloat(freeKickPasses),
      this.throughBalls90 = parseFloat(throughBalls90),
      this.switches90 = parseFloat(switches90),
      this.crosses90 = parseFloat(crosses90),
      this.throwIns90 = parseFloat(throwIns90),
      this.cornerKicks90 = parseFloat(cornerKicks90),
      this.inswingingCorners90 = parseFloat(inswingingCorners90),
      this.outswingingCorners90 = parseFloat(outswingingCorners90),
      this.straightCorners90 = parseFloat(straightCorners90),
      this.passesOffside90 = parseFloat(passesOffside90),
      this.passesBlockedByOpp90 = parseFloat(passesBlockedByOpp90)
  }
}

class ShotAndGoalCreation{
  constructor(name, club, season, shotCreateAct90, liveBallShotCreateAct90, deadBallShotCreateAct90, takeOnShotCreateAct90,
    shotsLeadingToNewShot90, foulsLeadingToShot90, defendingActionsLeadingToShot90, goalCreateAct90, liveBallGoalCreateAct90, 
    deadBallGoalCreateAct90, takeOnGoalCreateAct90, shotsLeadingToGoal90, foulsLeadingToGoal90, defendingActionsLeadingToGoal90,
    position, league){
      this.name = name,
      this.club = club,
      this.season = season,
      this.position = position,
      this.league = league,
      this.shotCreateAct90 = parseFloat(shotCreateAct90),
      this.liveBallShotCreateAct90 = parseFloat(liveBallShotCreateAct90),
      this.deadBallShotCreateAct90 = parseFloat(deadBallShotCreateAct90),
      this.takeOnShotCreateAct90 = parseFloat(takeOnShotCreateAct90),
      this.shotsLeadingToNewShot90 = parseFloat(shotsLeadingToNewShot90),
      this.foulsLeadingToShot90 = parseFloat(foulsLeadingToShot90),
      this.defendingActionsLeadingToShot90 = parseFloat(defendingActionsLeadingToShot90),
      this.goalCreateAct90 = parseFloat(goalCreateAct90),
      this.liveBallGoalCreateAct90 = parseFloat(liveBallGoalCreateAct90),
      this.deadBallGoalCreateAct90 = parseFloat(deadBallGoalCreateAct90),
      this.takeOnGoalCreateAct90 = parseFloat(takeOnGoalCreateAct90),
      this.shotsLeadingToGoal90 = parseFloat(shotsLeadingToGoal90),
      this.foulsLeadingToGoal90 = parseFloat(foulsLeadingToGoal90),
      this.defendingActionsLeadingToGoal90 = parseFloat(defendingActionsLeadingToGoal90)
  }
}

class DefensiveStats{
  constructor(name, club, season, tacklesAttempted90, tacklesWon90, tacklesInDef3rd90, tacklesInMiddle3rd90, tacklesInAttack3rd90,
    dribblersTackled90, dribblersChallenged90, percentDribblersTackled90, challengesLost90, blocks90, shotsBlocked90, passesBlocke90,
    interceptions90, tacklesAndInterceptions90, clearances90, errors90, position, league){
      this.name = name,
      this.club = club,
      this.season = season,
      this.position = position,
      this.league = league,
    this.tacklesAttempted90 = parseFloat(tacklesAttempted90),
    this.tacklesWon90 = parseFloat(tacklesWon90),
    this.tacklesInDef3rd90 = parseFloat(tacklesInDef3rd90),
    this.tacklesInMiddle3rd90 = parseFloat(tacklesInMiddle3rd90),
    this.tacklesInAttack3rd90 = parseFloat(tacklesInAttack3rd90),
    this.dribblersTackled90 = parseFloat(dribblersTackled90),
    this.dribblersChallenged90 = parseFloat(dribblersChallenged90),
    this.percentDribblersTackled90 = percentDribblersTackled90,
    this.challengesLost90 = parseFloat(challengesLost90),
    this.blocks90 = parseFloat(blocks90),
    this.shotsBlocked90 = parseFloat(shotsBlocked90),
    this.passesBlocke90 = parseFloat(passesBlocke90),
    this.interceptions90 = parseFloat(interceptions90),
    this.tacklesAndInterceptions90 = parseFloat(tacklesAndInterceptions90),
    this.clearances90 = parseFloat(clearances90),
    this.errors90 = parseFloat(errors90)
  }
}

class PossessionStats{
  constructor(name, club, season, touches90, touchesInDefPenArea90, touchesInDef3rd90, touchesInMiddle3rd90, touchesInAttack3rd90,
    touchesInAttackPenArea90, liveBallTouches90, takeOnsAttempted90, successfulTakeOns90, successfulTakeOnPercent, timesTackledInTakeOn90,
    tackledInTakeOnPercent, carries90, totalCarryingDistance90, progressiveCarryingDistance90, carriesIntoFinal3rd90, carriesIntoPenArea90,
    miscontrols90, dispossessed90, passesReceived90, position, league){
      this.name = name,
      this.club = club,
      this.season = season,
      this.position = position,
      this.league = league,
    this.touches90 = parseFloat(touches90),
    this.touchesInDefPenArea90 = parseFloat(touchesInDefPenArea90),
    this.touchesInDef3rd90 = parseFloat(touchesInDef3rd90),
    this.touchesInMiddle3rd90 = parseFloat(touchesInMiddle3rd90),
    this.touchesInAttack3rd90 = parseFloat(touchesInAttack3rd90),
    this.touchesInAttackPenArea90 = parseFloat(touchesInAttackPenArea90),
    this.liveBallTouches90 = parseFloat(liveBallTouches90),
    this.takeOnsAttempted90 = parseFloat(takeOnsAttempted90),
    this.successfulTakeOns90 = parseFloat(successfulTakeOns90),
    this.successfulTakeOnPercent = successfulTakeOnPercent,
    this.timesTackledInTakeOn90 = parseFloat(timesTackledInTakeOn90),
    this.tackledInTakeOnPercent = tackledInTakeOnPercent,
    this.totalCarryingDistance90 = parseFloat(totalCarryingDistance90),
    this.progressiveCarryingDistance90 = parseFloat(progressiveCarryingDistance90),
    this.carriesIntoFinal3rd90 = parseFloat(carriesIntoFinal3rd90),
    this.carriesIntoPenArea90 = parseFloat(carriesIntoPenArea90),
    this.carries90 = parseFloat(carries90),
    this.miscontrols90 = parseFloat(miscontrols90),
    this.dispossessed90 = parseFloat(dispossessed90),
    this.passesReceived90 = parseFloat(passesReceived90)
  }
}

class OtherStatistics{
  constructor(name, club, season, secondYellow90, foulsCommitted90, foulsDrawn90, offsides90, penaltiesWon90, penaltiesGivenAway90,
    ownGoals90, ballRecoveries90, aerialsWon90, aerialsLost90, percentAerialsWon, position, league){
      this.name = name,
      this.club = club,
      this.season = season,
      this.position = position,
      this.league = league,
      this.secondYellow90 = parseFloat(secondYellow90),
      this.foulsCommitted90 = parseFloat(foulsCommitted90),
      this.foulsDrawn90 = parseFloat(foulsDrawn90),
      this.offsides90 = parseFloat(offsides90),
      this.penaltiesWon90 = parseFloat(penaltiesWon90),
      this.penaltiesGivenAway90 = parseFloat(penaltiesGivenAway90),
      this.ownGoals90 = parseFloat(ownGoals90),
      this.ballRecoveries90 = parseFloat(ballRecoveries90),
      this.aerialsWon90 = parseFloat(aerialsWon90),
      this.aerialsLost90 = parseFloat(aerialsLost90),
      this.percentAerialsWon = percentAerialsWon
  }
}

class Player {
    listOfSeasons = []
    constructor(name, position) {
      this.name = name;
      this.position = position;
    }
  
    addSeason(season) {
        this.listOfSeasons.push(season)
    }
}

function isPlayerInArray(playerArray, player) {
  return playerArray.some((p) => p.name === player.name);
}

const players = [];
const seasons = [];

const directoryPath = './PremierLeague2021-22/';
const files = fs.readdirSync(directoryPath);

const season = "2021-22"
const league = "Premier League"

files.forEach(file => {
    const data = fs.readFileSync(directoryPath + file, 'utf8').split('\n');
    var clubNameHyphen = file.replace('-Stats.txt','')
    var clubName = clubNameHyphen.replace("-"," ")
    for (let i = 1; i < data.length - 1; i += 2) {
        const name = data[i];
        var statsStore;
        var playerPosition;
        if(data[i+1]!==null){
            const stats = data[i+1].split(/\s+/);
            if(stats[0]!=="GK" && stats[1]!==undefined){//the undefined part makes sure players with no data don't slide through

              playerPosition = stats[0];

              var standard_stats = new StandardStats(name, clubName, season, stats[1], stats[2], stats[3], stats[4], stats[5], stats[6],
              stats[7], stats[8], stats[9], stats[10], stats[11], stats[12], stats[13], stats[14], stats[15], playerPosition, league);
                
              var shooting_stats = new ShootingStats(name, clubName, season, stats[16], stats[17], stats[18], stats[19], stats[20],
              stats[21], stats[22], stats[23], stats[24], stats[25], playerPosition, league)

              var passing_stats = new PassingStats(name, clubName, season, stats[26], stats[27], stats[28], stats[29], stats[30], stats[31],
              stats[32], stats[33], stats[34], stats[35], stats[36], stats[37], stats[38], stats[39], stats[40], stats[41], stats[42], stats[43],
              stats[44], playerPosition, league)

              var pass_types =  new PassTypes(name, clubName, season, stats[45], stats[46], stats[47], stats[48], stats[49], stats[50], stats[51],
              stats[52], stats[53], stats[54], stats[55], stats[56], stats[57], playerPosition, league)

              var shot_goalCreation = new ShotAndGoalCreation(name, clubName, season, stats[58], stats[59], stats[60], stats[61], stats[62],
              stats[63], stats[64], stats[65], stats[66], stats[67], stats[68], stats[69], stats[70], stats[71], playerPosition, league)

              var defensive_stats = new DefensiveStats(name, clubName, season, stats[72], stats[73], stats[74], stats[75], stats[76], stats[77],
              stats[78], stats[79], stats[80], stats[81], stats[82], stats[83], stats[84], stats[85], stats[86], stats[87], playerPosition, league)

              var possession_stats = new PossessionStats(name, clubName, season, stats[88], stats[89], stats[90], stats[91], stats[92], stats[93],
              stats[94], stats[95], stats[96], stats[97], stats[98], stats[99], stats[100], stats[101], stats[102], stats[103], stats[104],
              stats[105], stats[106], stats[107], playerPosition, league)

              var other_stats = new OtherStatistics(name, clubName, season, stats[108], stats[109], stats[110], stats[111], stats[112], stats[113],
              stats[114], stats[115], stats[116], stats[117], stats[118], playerPosition, league)

              var playerSeason = new SeasonPerformance(name, clubName, season, playerPosition, standard_stats, shooting_stats, passing_stats, pass_types,
              shot_goalCreation, defensive_stats, possession_stats, other_stats)

              var player = new Player(name, playerPosition)
              player.addSeason(playerSeason)

              if(isPlayerInArray(players, player) != true){
                players.push(player);
                seasons.push(playerSeason);
              }
                
            }
            else if(stats[0]==="GK"){
              console.log(name)             
            }
        }
    }
    
});


console.log(players.length)
console.log(seasons.length)

module.exports = seasons;

let jsonString = JSON.stringify(seasons);

// Write the JSON string to a file

fs.writeFile('playersBig6_2021-22.json', jsonString, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('JSON file has been saved.');
});