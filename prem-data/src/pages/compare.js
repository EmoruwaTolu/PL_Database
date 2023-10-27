import React, { useState } from 'react';
import SearchTaskbar from '../components/search-taskbar';
import ComparePlayerSection from '../components/compare-player-section';
import RadarPlayerChart from '../components/radar-player-chart';
import './compare-style.css';

function Compare(){

    const [player1, setPlayer1] = useState();
    const [player2, setPlayer2] = useState();

    const [chartMode, setChartMode] =  useState([]);

    //const getValue = (value) => (typeof value === 'undefined' || value === null) ? 0 : value;

    const getValue = (value) => {
        if(typeof value === 'undefined' || value === null ){
            return 0;
        }
        else{

            return value
        }
    }

    var dataGoalContributions = [
        {
            subject: "Assists90",
            A: getValue(player1?.standard_stats?.assists90),
            B: getValue(player2?.standard_stats?.assists90),
            fullMark: 1
        },
        {
            subject: "Goals90",
            A: getValue(player1?.standard_stats?.goals90),
            B: getValue(player2?.standard_stats?.goals90),
            fullMark: 1
        },
        {
            subject: "xG90",
            A: getValue(player1?.standard_stats?.xG90),
            B: getValue(player2?.standard_stats?.xG90),
            fullMark: 1
        },
        {
            subject: "xAG",
            A: getValue(player1?.standard_stats?.xAG),
            B: getValue(player2?.standard_stats?.xAG),
            fullMark: 1
        },
        {
            subject: "goals/shotsOnTarget",
            A: getValue(player1?.shooting_stats?.goalPerShotOnTarget90),
            B: getValue(player2?.shooting_stats?.goalPerShotOnTarget90),
            fullMark: 1
        },
        {
            subject: "goals/shot",
            A: getValue(player1?.shooting_stats?.goalPerShot90),
            B: getValue(player2?.shooting_stats?.goalPerShot90),
            fullMark: 1
        },
        // {
        //     subject: "shots90",
        //     A: getValue(player1?.shooting_stats?.shots90),
        //     B: getValue(player2?.shooting_stats?.shots90),
        //     fullMark: 2
        // }
    ]

    var dataNonPenalty = [
        {
            subject: "nonPenXG90",
            A: getValue(player1?.standard_stats?.nonPenXG90),
            B: getValue(player2?.standard_stats?.nonPenXG90)
        },
        {
            subject: "nonPenGoals90",
            A: getValue(player1?.standard_stats?.nonPenGoals90),
            B: getValue(player2?.standard_stats?.nonPenGoals90)
        },
        {
            subject: "nonPenXG/Shot90",
            A: getValue(player1?.shooting_stats?.nonPenXGPerShot90),
            B: getValue(player2?.shooting_stats?.nonPenXGPerShot90)
        },
    ]

    var progressiveStats = [
        {
            subject: "ProgressiveCarries/90",
            A: getValue(player1?.standard_stats?.progCarries90),
            B: getValue(player2?.standard_stats?.progCarries90)
        },
        {
            subject: "ProgressivePassesReceived/90",
            A: getValue(player1?.standard_stats?.progPassRec90),
            B: getValue(player2?.standard_stats?.progPassRec90)
        },
        {
            subject: "ProgressivePasses/90",
            A: getValue(player1?.standard_stats?.progressivePass90),
            B: getValue(player2?.standard_stats?.progressivePass90)
        },
        {
            subject: "PassesFinalThird/90",
            A: getValue(player1?.passing_stats?.passesFinalThird90),
            B: getValue(player2?.passing_stats?.passesFinalThird90)
        },
        {
            subject: "KeyPasses/90",
            A: getValue(player1?.passing_stats?.keyPasses90),
            B: getValue(player2?.passing_stats?.keyPasses90)
        },
        {
            subject: "carriesIntoFinal3rd90",
            A: getValue(player1?.possession_stats?.carriesIntoFinal3rd90),
            B: getValue(player2?.possession_stats?.carriesIntoFinal3rd90)
        },
        {
            subject: "touchesInAttack3rd90",
            A: getValue(player1?.possession_stats?.touchesInAttack3rd90),
            B: getValue(player2?.possession_stats?.touchesInAttack3rd90)
        }

    ]

    const fetchData = async () => {
        const response = await fetch(`https://pl-database.onrender.com/calculate-percentiles`);
        const data = await response.json();

        console.log(data)
    }

    return(
        <div>
            <SearchTaskbar />
            <div className='compare-details-wrapper'>
                <ComparePlayerSection setPlayer={setPlayer1}/>
                {/* <RadarPlayerChart players={progressiveStats} playerNames={[player1?.name, player2?.name]}/> */}
                <ComparePlayerSection setPlayer={setPlayer2}/>
            </div>
            <button onClick={() => {fetchData()}}>Here</button>
        </div>
    )
}

export default Compare;
