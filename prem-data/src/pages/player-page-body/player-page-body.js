import PlayerPolarChart from '../../components/player-polar-chart';
import '../page-style.css';
import {useState} from 'react';

function PlayerPageBody(props){

    console.log(props.player.standard_stats.assists90[1])

    return(
        <div className='chart-body'>
            <PlayerPolarChart props={props}/>
            <div className='numbers-container'>
                <div className='player-statistics'>
                    <div className="bar-container">
                        <div className="bar" style={{ width: `${props.player.standard_stats.assists90[1]}%` }}>{props.player.standard_stats.assists90[0]}</div>
                    </div>
                </div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
            </div>
        </div>
    )
}

export default PlayerPageBody;