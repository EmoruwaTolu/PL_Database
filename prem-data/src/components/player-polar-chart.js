import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
  } from 'chart.js';
import { PolarArea } from 'react-chartjs-2';
import '../pages/page-style.css';
import {useState} from 'react';
import {makePositionReadable, playerCardDisplayLabels} from '../pages/player-page-body/player-page-functions';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

function PlayerPolarChart({player, view, setView}){

    var playerInfo = player;
    var positionArray = [];

    const options = {
        plugins: {
          legend: {
            display: false
          },
        }
    }

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

    if(playerInfo.position.includes(',')){
        positionArray = playerInfo.position.split(",");
        var positionData1 = playerCardDisplayLabels(positionArray[0], playerInfo, 1);
        var positionData2 = playerCardDisplayLabels(positionArray[1], playerInfo, 2);
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
    else {
        var playerCardInfo = playerCardDisplayLabels(playerInfo.position, playerInfo, 1);

        var data = {
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
    if(positionArray.length === 0){
        return(
            <div className='chart-container'>
                <div className='position-tabs'>
                    <button>{makePositionReadable(playerInfo.position)}</button>
                </div>
                <div className='percentile-polar-chart'>
                    <PolarArea data={data} options={options}/>
                    <p>Please note these percentiles are relative to other {makePositionReadable(playerInfo.position)}s</p>
                    <p>Furthermore, when looking at statistics it's important to take into consideration the teams these player play for(the team's playstyle, teammates, etc.).</p>
                </div>
            </div>
        )
    }
    else if (positionArray.length === 2){
        return(
            <div className='chart-container'>
                    <div className='position-tabs'>
                        <button className={view === 0 ? "active-position" : ""} onClick={() => {setView(0)}}>{makePositionReadable(positionArray[0])}</button>
                        <button className={view === 1 ? "active-position" : ""} onClick={() => {setView(1)}}>{makePositionReadable(positionArray[1])}</button>
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
        )
    }
    else{
        return(
            <div>An error occurred loading page</div>
        )
    }

}

export default PlayerPolarChart;