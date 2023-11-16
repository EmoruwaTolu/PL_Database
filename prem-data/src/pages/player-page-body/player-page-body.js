import PlayerPolarChart from '../../components/player-polar-chart';
import '../page-style.css';
import {useState} from 'react';

function PlayerPageBody(props){


    return(
        <div className='chart-body'>
            <PlayerPolarChart props={props}/>
        </div>
    )
}

export default PlayerPageBody;