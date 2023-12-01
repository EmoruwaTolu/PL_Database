import PlayerPolarChart from '../../components/player-polar-chart';
import '../page-style.css';
import { ScoringBars } from '../../components/bar-chart/scoring-barchart';
import { CreationBars } from '../../components/bar-chart/creation-barchart';
import { ProgressionBars } from '../../components/bar-chart/progression-barchart';
import { InvolvementBars } from '../../components/bar-chart/involvement-barchart';
import { PassingBars } from '../../components/bar-chart/passing-barchart';
import {useState} from 'react';

function PlayerPageBody(props){

    const [view, setView] = useState(0);
    var percentileGroup = view + 1;

    console.log(view)

    return(
        <div className='chart-body'>
            <PlayerPolarChart player={props.player} view={view} setView={setView} />
            <div className='numbers-container'>
                <div className='player-statistics'>
                    <ScoringBars stats={props.player} percentileGroup={percentileGroup}/>
                </div>
                <div className='player-statistics'>
                    <CreationBars stats={props.player} percentileGroup={percentileGroup}/>
                </div>
                <div className='player-statistics'>
                    <ProgressionBars stats={props.player} percentileGroup={percentileGroup}/>
                </div>
                <div className='player-statistics'>
                    <InvolvementBars stats={props.player} percentileGroup={percentileGroup}/>
                </div>
                <div className='player-statistics'>
                    <PassingBars stats={props.player} percentileGroup={percentileGroup}/>
                </div>
                <div>1</div>
                <div>1</div>
            </div>
        </div>
    )
}

export default PlayerPageBody;