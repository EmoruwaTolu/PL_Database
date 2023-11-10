import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
  } from 'chart.js';
import { PolarArea } from 'react-chartjs-2';
import '../page-style.css';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

function PlayerPageBody(props){

    var playerInfo = props.player

    console.log(playerInfo.possession_stats.dispossessed90[1])

    const options = {
        plugins: {
          legend: {
            display: false
          },
        }
    }
      

    var data = {
        
        labels: ['Non-Penalty Expected Goals', 
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
            ],
        datasets: [
          {
            label: '',
            data: [
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
            ],
            backgroundColor: [
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
            ],
            borderWidth: 1,
          },
        ],
      };

    return(
        <div className='chart-container'>
            <PolarArea data={data} options={options}/>
        </div>
    )
}

export default PlayerPageBody;