import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
  } from 'chart.js';
import { PolarArea } from 'react-chartjs-2';
import '../page-style.css';
import {useState} from 'react';
import {makePositionReadable, playerCardDisplayLabels} from './player-page-functions';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

function PlayerPageBody(props){

    var playerInfo = props.player;
    var positionArray = [];
    const [view, setView] = useState(0);

    function changeView(id){
        setView(id);
    }

    const options = {
        plugins: {
          legend: {
            display: false
          },
        }
    }

    var relevantPositionData = [
        'Non-Penalty Expected Goals', 
        'Goals per 90', 
        'Non-Penalty Goals minus XG', 
        'Shots per 90', 
        'Shot Creating Actions per 90', 
        'Expected Assists per 90',
        'Key Passes per 90',
        'Passes into the Final 3rd per 90',
        'Progressive Passes per 90',
        'Progressive Carries per 90',
        'Successful Take-ons per 90',
        'Take-ons Attempted per 90',
        'Fouls Drawn per 90',
        'Touches per 90',
        'Passes Received per 90',
        'Times Dispossessed per 90'
    ];

    var positionData = [
        playerInfo.standard_stats.nonPenXG90[1],
        playerInfo.standard_stats.goals90[1],
        playerInfo.shooting_stats.nonPenGoalsMinusXG[1],
        playerInfo.shooting_stats.shots90[1],

        playerInfo.shot_goalCreation.shotCreateAct90[1],
        playerInfo.passing_stats.xA90[1],
        playerInfo.passing_stats.keyPasses90[1],
        playerInfo.passing_stats.passesFinalThird90[1],

        playerInfo.standard_stats.progressivePass90[1],
        playerInfo.standard_stats.progCarries90[1],
        playerInfo.possession_stats.successfulTakeOns90[1],
        playerInfo.possession_stats.takeOnsAttempted90[1],

        playerInfo.other_stats.foulsDrawn90[1],
        playerInfo.possession_stats.touches90[1],
        playerInfo.possession_stats.passesReceived90[1],
        playerInfo.possession_stats.dispossessed90[1],
    ];

    const colorSections = [
        'rgba(255, 99, 132, 0.5)',
        'rgba(255, 99, 132, 0.5)',
        'rgba(255, 99, 132, 0.5)',
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(75, 192, 192, 0.5)',
    ];

    var data = {
        labels: relevantPositionData,
        datasets: [
          {
            label: 'Percentile',
            data: positionData,
            backgroundColor: colorSections,
            borderWidth: 1,
          },
        ],
    };

    if(playerInfo.position === "FW" || playerInfo.position === "AM" || playerInfo.position === "MF" || playerInfo.position === "FB"){
        var playerCardInfo = playerCardDisplayLabels(playerInfo.position, playerInfo, 1);

        data = {
            labels: playerCardInfo[1],
            datasets: [
              {
                label: 'Percentile',
                data: playerCardInfo[0],
                backgroundColor: colorSections,
                borderWidth: 1,
              },
            ],
        };
    }
      

    
    console.log(playerInfo.position);

    if(playerInfo.position.includes(',')){
        positionArray = playerInfo.position.split(",");
        var positionData1 = playerCardDisplayLabels(positionArray[0], playerInfo, 1);
        var positionData2 = playerCardDisplayLabels(positionArray[1], playerInfo, 2);

        console.log(positionData1)
        var data1 = {
            labels: positionData1[1],
            datasets: [
              {
                label: 'Percentile',
                data: positionData1[0],
                backgroundColor: colorSections,
                borderWidth: 1,
              },
            ],
        };
        var data2 = {
            labels: positionData2[1],
            datasets: [
              {
                label: 'Percentile',
                data: positionData2[0],
                backgroundColor: colorSections,
                borderWidth: 1,
              },
            ],
        };
    }

    return(
        <div>
            {positionArray.length === 0 && (
                <div className='chart-container'>
                    <div className='percentile-polar-chart'>
                        <PolarArea data={data} options={options}/>
                    </div>
                    <p>Please note these percentiles are relative to other {makePositionReadable(playerInfo.position)}s</p>
                    <p>Furthermore, when looking at statistics it's important to take into consideration the teams these player play for(the team's playstyle, teammates, etc.).</p>
                </div>
            )}
            {positionArray.length === 2 && (
                <div className='chart-container'>
                     <div className='position-tabs'>
                        <button className={view === 0 ? "active-position" : ""} onClick={() => {changeView(0)}}>{makePositionReadable(positionArray[0])}</button>
                        <button className={view === 1 ? "active-position" : ""} onClick={() => {changeView(1)}}>{makePositionReadable(positionArray[1])}</button>
                    </div>
                    {view === 0 && (
                            <div className='percentile-polar-chart'>
                                <PolarArea data={data1} options={options}/>
                                <p>Please note these percentiles are relative to other {makePositionReadable(positionArray[0])}s from the same season</p>
                                <p>Furthermore, when looking at statistics it's important to take into consideration the teams these player play for(the team's playstyle, teammates, etc.).</p>
                            </div>
                    )}
                    {view === 1 && (
                            <div className='percentile-polar-chart'>
                                <PolarArea data={data2} options={options}/>
                                <p>Please note these percentiles are relative to other {makePositionReadable(positionArray[1])}s from the same season</p>
                                <p>Furthermore, when looking at statistics it's important to take into consideration the teams these player play for(the team's playstyle, teammates, etc.).</p>
                            </div>
                    )}
                </div>
            )}
        </div>
    )
}

export default PlayerPageBody;