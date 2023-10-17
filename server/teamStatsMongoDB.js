const fs = require('fs');
const path = require('path');

class ClubSeason{
    constructor(clubname, overallStats, homeStats, awayStats){
        this.clubname = clubname,
        this.overallStats = overallStats,
        this.homeStats = homeStats,
        this.awayStats = awayStats
    }
}

class ClubOverall{
    constructor(clubname, matchesPlayed, wins, draws, losses, goalsScored, goalsConceded, goalDifference, points, pointPerGame,
                totalXG, totalXGA, totalXGD, totalXGDPer90, avgAttendance, notes, season){
        this.clubname = clubname,
        this.matchesPlayed = matchesPlayed,
        this.wins = wins,
        this.draws = draws,
        this.losses = losses,
        this.goalsScored = goalsScored,
        this.goalsConceded = goalsConceded,
        this.goalDifference = goalDifference,
        this.points = points,
        this.pointPerGame = pointPerGame,
        this.totalXG = totalXG,
        this.totalXGA = totalXGA,
        this.totalXGD = totalXGD,
        this.totalXGDPer90 = totalXGDPer90,
        this.avgAttendance = avgAttendance,
        this.notes =  notes,
        this.season = season
    }
}

class ClubHome{
    constructor(clubname, matchesPlayed, wins, draws, losses, goalsScored, goalsConceded, goalDifference, points, pointPerGame,
                totalXG, totalXGA, totalXGD, totalXGDPer90, season){
        this.clubname = clubname,
        this.matchesPlayed = matchesPlayed,
        this.wins = wins,
        this.draws = draws,
        this.losses = losses,
        this.goalsScored = goalsScored,
        this.goalsConceded = goalsConceded,
        this.goalDifference = goalDifference,
        this.points = points,
        this.pointPerGame = pointPerGame,
        this.totalXG = totalXG,
        this.totalXGA = totalXGA,
        this.totalXGD = totalXGD,
        this.totalXGDPer90 = totalXGDPer90,
        this.season = season,
        this.location = "Home"
    }
}

class ClubAway{
    constructor(clubname, matchesPlayed, wins, draws, losses, goalsScored, goalsConceded, goalDifference, points, pointPerGame,
                totalXG, totalXGA, totalXGD, totalXGDPer90, season){
        this.clubname = clubname,
        this.matchesPlayed = matchesPlayed,
        this.wins = wins,
        this.draws = draws,
        this.losses = losses,
        this.goalsScored = goalsScored,
        this.goalsConceded = goalsConceded,
        this.goalDifference = goalDifference,
        this.points = points,
        this.pointPerGame = pointPerGame,
        this.totalXG = totalXG,
        this.totalXGA = totalXGA,
        this.totalXGD = totalXGD,
        this.totalXGDPer90 = totalXGDPer90,
        this.season = season,
        this.location = "Away"
    }
}

const directoryPath1 = './PremierLeagueSeasonHomeAway/';
const files1 = fs.readdirSync(directoryPath1);

var teamSeasonsHome = [];
var teamSeasonsAway = [];

files1.forEach(file => {
    const data = fs.readFileSync(directoryPath1 + file, 'utf8').split('\n');
    var season = file.split(".")[0];

    for(let i = 0; i < data.length; i+= 3){
        var clubname  = data[i];
        var clubHomeStats = data[i+1];
        var clubAwayStats = data[i+2];

        var teamHomeStatsSplits = clubHomeStats.split(/\s+/);
        var teamAwayStatsSplits = clubAwayStats.split(/\s+/);

        var teamHomeStats = new ClubHome(clubname, teamHomeStatsSplits[0], teamHomeStatsSplits[1], teamHomeStatsSplits[2], teamHomeStatsSplits[3], teamHomeStatsSplits[4],
            teamHomeStatsSplits[5], teamHomeStatsSplits[6], teamHomeStatsSplits[7], teamHomeStatsSplits[8], teamHomeStatsSplits[9], teamHomeStatsSplits[10], 
            teamHomeStatsSplits[11], teamHomeStatsSplits[12], season);

        var teamAwayStats = new ClubAway(clubname, teamHomeStatsSplits[0], teamAwayStatsSplits[1], teamAwayStatsSplits[2], teamAwayStatsSplits[3], teamAwayStatsSplits[4],
            teamAwayStatsSplits[5], teamAwayStatsSplits[6], teamAwayStatsSplits[7], teamAwayStatsSplits[8], teamAwayStatsSplits[9], teamAwayStatsSplits[10], 
            teamAwayStatsSplits[11], teamAwayStatsSplits[12], season);

        teamSeasonsHome.push(teamHomeStats);
        teamSeasonsAway.push(teamAwayStats);
        
    }

})

const directoryPath2 = './PremierLeagueSeasonOverall/';
const files2 = fs.readdirSync(directoryPath2);
var teamSeasonsOverall = [];

files2.forEach(file => {
    const data = fs.readFileSync(directoryPath2 + file, 'utf8').split('\n');
    var season = file.split(".")[0];

    for(let i = 0; i < data.length; i+= 2){

        var teamOverallStatsSplit = data[i+1].split(/\s+/);

        var teamOverallStats = new ClubOverall(data[i], teamOverallStatsSplit[0], teamOverallStatsSplit[1], teamOverallStatsSplit[2], teamOverallStatsSplit[3], 
            teamOverallStatsSplit[4], teamOverallStatsSplit[5], teamOverallStatsSplit[6], teamOverallStatsSplit[7], 
            teamOverallStatsSplit[8], teamOverallStatsSplit[9], teamOverallStatsSplit[10], teamOverallStatsSplit[11], 
            teamOverallStatsSplit[12], teamOverallStatsSplit[13], teamOverallStatsSplit[20], season);

        console.log(teamOverallStats);
        teamSeasonsOverall.push(teamOverallStats);

    }
})


let overallString = JSON.stringify(teamSeasonsOverall);
let awayString = JSON.stringify(teamSeasonsAway);
let homeString = JSON.stringify(teamSeasonsHome);

// Write the JSON string to a file

fs.writeFile('teamsHome.json', homeString, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('JSON file has been saved.');
});

fs.writeFile('teamsAway.json', awayString, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('JSON file has been saved.');
});

fs.writeFile('overallHome.json', overallString, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('JSON file has been saved.');
});