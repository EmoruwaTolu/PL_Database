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
    possession_stats, other_stats, league, image){
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
      this.other_stats = other_stats,
      this.image = image
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
    this.goals90 = goals90.split(",").map(x => parseFloat(x, 10)),
    this.assists90 = assists90.split(",").map(x => parseFloat(x, 10)),
    this.goalsAndAssits90 = goalsAndAssits90.split(",").map(x => parseFloat(x, 10)),
    this.nonPenGoals90 = nonPenGoals90.split(",").map(x => parseFloat(x, 10)),
    this.penScored = penScored.split(",").map(x => parseFloat(x, 10)),
    this.pensTaken = pensTaken.split(",").map(x => parseFloat(x, 10)),
    this.yellow90 = yellow90.split(",").map(x => parseFloat(x, 10)),
    this.red90 = red90.split(",").map(x => parseFloat(x, 10)),
    this.xG90 = xG90.split(",").map(x => parseFloat(x, 10)),
    this.nonPenXG90 = nonPenXG90.split(",").map(x => parseFloat(x, 10)),
    this.xAG = xAG.split(",").map(x => parseFloat(x, 10)),
    this.nonPenXGAG90 = nonPenXGAG90.split(",").map(x => parseFloat(x, 10)),
    this.progCarries90 = progCarries90.split(",").map(x => parseFloat(x, 10)),
    this.progressivePass90 = progressivePass90.split(",").map(x => parseFloat(x, 10)),
    this.progPassRec90 = progPassRec90.split(",").map(x => parseFloat(x, 10))
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
    this.shots90 = shots90.split(",").map(x => parseFloat(x, 10)),
    this.shotOnTarget90 = shotOnTarget90.split(",").map(x => parseFloat(x, 10)),
    this.shotOnTargetPercent90 = shotOnTargetPercent90.split(","),
    this.goalPerShot90 = goalPerShot90.split(",").map(x => parseFloat(x, 10)),
    this.goalPerShotOnTarget90 = goalPerShotOnTarget90.split(",").map(x => parseFloat(x, 10)),
    this.avgShotDistance = avgShotDistance.split(",").map(x => parseFloat(x, 10)),
    this.shotsFreeKicks = shotsFreeKicks.split(",").map(x => parseFloat(x, 10)),
    this.nonPenXGPerShot90 = nonPenXGPerShot90.split(",").map(x => parseFloat(x, 10)),
    this.goalsMinusXG = goalsMinusXG.split(",").map(x => parseFloat(x, 10)),
    this.nonPenGoalsMinusXG = nonPenGoalsMinusXG.split(",").map(x => parseFloat(x, 10))
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
      this.passesCompleted90 = passesCompleted90.split(",").map(x => parseFloat(x, 10)),
      this.passesAttempted90 = passesAttempted90.split(",").map(x => parseFloat(x, 10)),
      this.passCompletionPercent = passCompletionPercent.split(","),
      this.totalPassingDistance90 = totalPassingDistance90.split(",").map(x => parseFloat(x, 10)),
      this.progressivePassingDistance90 = progressivePassingDistance90.split(",").map(x => parseFloat(x, 10)),
      this.shortPassesCompleted90 = shortPassesCompleted90.split(",").map(x => parseFloat(x, 10)),
      this.shortPassesAttempted90 = shortPassesAttempted90.split(",").map(x => parseFloat(x, 10)),
      this.shortPassesCompletionPercent = shortPassesCompletionPercent.split(","),
      this.mediumPassesCompleted90 = mediumPassesCompleted90.split(",").map(x => parseFloat(x, 10)),
      this.mediumPassesAttempted90 = mediumPassesAttempted90.split(",").map(x => parseFloat(x, 10)),
      this.mediumPassesCompletionPercent = mediumPassesCompletionPercent.split(","),
      this.longPassesCompleted90 = longPassesCompleted90.split(",").map(x => parseFloat(x, 10)),
      this.longPassesAttempted90 = longPassesAttempted90.split(",").map(x => parseFloat(x, 10)),
      this.longPassesCompletionPercent = longPassesCompletionPercent.split(","),
      this.xA90 = xA90.split(",").map(x => parseFloat(x, 10)),
      this.keyPasses90 = keyPasses90.split(",").map(x => parseFloat(x, 10)),
      this.passesFinalThird90 = passesFinalThird90.split(",").map(x => parseFloat(x, 10)),
      this.passesPenaltyArea90 = passesPenaltyArea90.split(",").map(x => parseFloat(x, 10)),
      this.crossesPenaltyArea90 = crossesPenaltyArea90.split(",").map(x => parseFloat(x, 10))
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
      this.liveBallPasses90 = liveBallPasses90.split(",").map(x => parseFloat(x, 10)),
      this.deadBallPasses90 = deadBallPasses90.split(",").map(x => parseFloat(x, 10)),
      this.freeKickPasses = freeKickPasses.split(",").map(x => parseFloat(x, 10)),
      this.throughBalls90 = throughBalls90.split(",").map(x => parseFloat(x, 10)),
      this.switches90 = switches90.split(",").map(x => parseFloat(x, 10)),
      this.crosses90 = crosses90.split(",").map(x => parseFloat(x, 10)),
      this.throwIns90 = throwIns90.split(",").map(x => parseFloat(x, 10)),
      this.cornerKicks90 = cornerKicks90.split(",").map(x => parseFloat(x, 10)),
      this.inswingingCorners90 = inswingingCorners90.split(",").map(x => parseFloat(x, 10)),
      this.outswingingCorners90 = outswingingCorners90.split(",").map(x => parseFloat(x, 10)),
      this.straightCorners90 = straightCorners90.split(",").map(x => parseFloat(x, 10)),
      this.passesOffside90 = passesOffside90.split(",").map(x => parseFloat(x, 10)),
      this.passesBlockedByOpp90 = passesBlockedByOpp90.split(",").map(x => parseFloat(x, 10))
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
      this.shotCreateAct90 = shotCreateAct90.split(",").map(x => parseFloat(x, 10)),
      this.liveBallShotCreateAct90 = liveBallShotCreateAct90.split(",").map(x => parseFloat(x, 10)),
      this.deadBallShotCreateAct90 = deadBallShotCreateAct90.split(",").map(x => parseFloat(x, 10)),
      this.takeOnShotCreateAct90 = takeOnShotCreateAct90.split(",").map(x => parseFloat(x, 10)),
      this.shotsLeadingToNewShot90 = shotsLeadingToNewShot90.split(",").map(x => parseFloat(x, 10)),
      this.foulsLeadingToShot90 = foulsLeadingToShot90.split(",").map(x => parseFloat(x, 10)),
      this.defendingActionsLeadingToShot90 = defendingActionsLeadingToShot90.split(",").map(x => parseFloat(x, 10)),
      this.goalCreateAct90 = goalCreateAct90.split(",").map(x => parseFloat(x, 10)),
      this.liveBallGoalCreateAct90 = liveBallGoalCreateAct90.split(",").map(x => parseFloat(x, 10)),
      this.deadBallGoalCreateAct90 = deadBallGoalCreateAct90.split(",").map(x => parseFloat(x, 10)),
      this.takeOnGoalCreateAct90 = takeOnGoalCreateAct90.split(",").map(x => parseFloat(x, 10)),
      this.shotsLeadingToGoal90 = shotsLeadingToGoal90.split(",").map(x => parseFloat(x, 10)),
      this.foulsLeadingToGoal90 = foulsLeadingToGoal90.split(",").map(x => parseFloat(x, 10)),
      this.defendingActionsLeadingToGoal90 = defendingActionsLeadingToGoal90.split(",").map(x => parseFloat(x, 10))
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
    this.tacklesAttempted90 = tacklesAttempted90.split(",").map(x => parseFloat(x, 10)),
    this.tacklesWon90 = tacklesWon90.split(",").map(x => parseFloat(x, 10)),
    this.tacklesInDef3rd90 = tacklesInDef3rd90.split(",").map(x => parseFloat(x, 10)),
    this.tacklesInMiddle3rd90 = tacklesInMiddle3rd90.split(",").map(x => parseFloat(x, 10)),
    this.tacklesInAttack3rd90 = tacklesInAttack3rd90.split(",").map(x => parseFloat(x, 10)),
    this.dribblersTackled90 = dribblersTackled90.split(",").map(x => parseFloat(x, 10)),
    this.dribblersChallenged90 = dribblersChallenged90.split(",").map(x => parseFloat(x, 10)),
    this.percentDribblersTackled90 = percentDribblersTackled90.split(","),
    this.challengesLost90 = challengesLost90.split(",").map(x => parseFloat(x, 10)),
    this.blocks90 = blocks90.split(",").map(x => parseFloat(x, 10)),
    this.shotsBlocked90 = shotsBlocked90.split(",").map(x => parseFloat(x, 10)),
    this.passesBlocke90 = passesBlocke90.split(",").map(x => parseFloat(x, 10)),
    this.interceptions90 = interceptions90.split(",").map(x => parseFloat(x, 10)),
    this.tacklesAndInterceptions90 = tacklesAndInterceptions90.split(",").map(x => parseFloat(x, 10)),
    this.clearances90 = clearances90.split(",").map(x => parseFloat(x, 10)),
    this.errors90 = errors90.split(",").map(x => parseFloat(x, 10))
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
    this.touches90 = touches90.split(",").map(x => parseFloat(x, 10)),
    this.touchesInDefPenArea90 = touchesInDefPenArea90.split(",").map(x => parseFloat(x, 10)),
    this.touchesInDef3rd90 = touchesInDef3rd90.split(",").map(x => parseFloat(x, 10)),
    this.touchesInMiddle3rd90 = touchesInMiddle3rd90.split(",").map(x => parseFloat(x, 10)),
    this.touchesInAttack3rd90 = touchesInAttack3rd90.split(",").map(x => parseFloat(x, 10)),
    this.touchesInAttackPenArea90 = touchesInAttackPenArea90.split(",").map(x => parseFloat(x, 10)),
    this.liveBallTouches90 = liveBallTouches90.split(",").map(x => parseFloat(x, 10)),
    this.takeOnsAttempted90 = takeOnsAttempted90.split(",").map(x => parseFloat(x, 10)),
    this.successfulTakeOns90 = successfulTakeOns90.split(",").map(x => parseFloat(x, 10)),
    this.successfulTakeOnPercent = successfulTakeOnPercent.split(),
    this.timesTackledInTakeOn90 = timesTackledInTakeOn90.split(",").map(x => parseFloat(x, 10)),
    this.tackledInTakeOnPercent = tackledInTakeOnPercent.split(","),
    this.totalCarryingDistance90 = totalCarryingDistance90.split(",").map(x => parseFloat(x, 10)),
    this.progressiveCarryingDistance90 = progressiveCarryingDistance90.split(",").map(x => parseFloat(x, 10)),
    this.carriesIntoFinal3rd90 = carriesIntoFinal3rd90.split(",").map(x => parseFloat(x, 10)),
    this.carriesIntoPenArea90 = carriesIntoPenArea90.split(",").map(x => parseFloat(x, 10)),
    this.carries90 = carries90.split(",").map(x => parseFloat(x, 10)),
    this.miscontrols90 = miscontrols90.split(",").map(x => parseFloat(x, 10)),
    this.dispossessed90 = dispossessed90.split(",").map(x => parseFloat(x, 10)),
    this.passesReceived90 = passesReceived90.split(",").map(x => parseFloat(x, 10))
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
      this.secondYellow90 = secondYellow90.split(",").map(x => parseFloat(x, 10)),
      this.foulsCommitted90 = foulsCommitted90.split(",").map(x => parseFloat(x, 10)),
      this.foulsDrawn90 = foulsDrawn90.split(",").map(x => parseFloat(x, 10)),
      this.offsides90 = offsides90.split(",").map(x => parseFloat(x, 10)),
      this.penaltiesWon90 = penaltiesWon90.split(",").map(x => parseFloat(x, 10)),
      this.penaltiesGivenAway90 = penaltiesGivenAway90.split(",").map(x => parseFloat(x, 10)),
      this.ownGoals90 = ownGoals90.split(",").map(x => parseFloat(x, 10))
      this.ballRecoveries90 = ballRecoveries90.split(',').map(x => parseFloat(x, 10))
      this.aerialsWon90 = aerialsWon90.split(",").map(x => parseFloat(x, 10)),
      this.aerialsLost90 = aerialsLost90.split(",").map(x => parseFloat(x, 10)),
      this.percentAerialsWon = percentAerialsWon.split(",")
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

var players = [];
const seasons = [];

const directoryPath = './prem2022-23_with_pictures/';
const files = fs.readdirSync(directoryPath);

const season = "2022-23"
const league = "Premier League"

files.forEach(file => {
    const data = fs.readFileSync(directoryPath + file, 'utf8').split('\n');
    var clubNameHyphen = file.replace('-Stats.txt','')
    var clubName = clubNameHyphen.replace("-"," ")
    for (let i = 1; i < data.length - 1; i += 2) {
        const name = data[i];
        console.log(name)
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
              shot_goalCreation, defensive_stats, possession_stats, other_stats, league, stats[119])

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

    // let jsonString = JSON.stringify(players);

    // fs.writeFile(`${clubName}.json`, jsonString, (err) => {
    //   if (err) {
    //     console.error(err);
    //     return;
    //   }
    //   console.log('JSON file has been saved.');
    // });

    // players = []
    
});


console.log(players.length)
console.log(seasons.length)

module.exports = seasons;

let jsonString = JSON.stringify(seasons);

// Write the JSON string to a file

fs.writeFile('players_2022-23.json', jsonString, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('JSON file has been saved.');
});