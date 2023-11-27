import PlayerPolarChart from '../../components/player-polar-chart';
import '../page-style.css';
import { Bars } from '../../components/bar-chart/barchart';
import {useState} from 'react';

function PlayerPageBody(props){

    console.log(props.player.standard_stats.assists90[1])

    return(
        <div className='chart-body'>
            <PlayerPolarChart props={props}/>
            <div className='numbers-container'>
                <div className='player-statistics'>
                    <Bars stats={props.player} percentileGroup={1}/>
                </div>
                {/* <div className='player-statistics'>
                    <Bars stats={props.player.passing_stats} percentileGroup={1}/>
                </div>
                <div className='player-statistics'>
                    <Bars stats={props.player.possession_stats} percentileGroup={1}/>
                </div>
                <div className='player-statistics'>
                    <Bars stats={props.player.shot_goalCreation} percentileGroup={1}/>
                </div> */}
                <div>1</div>
                <div>1</div>
            </div>
        </div>
    )
}

export default PlayerPageBody;