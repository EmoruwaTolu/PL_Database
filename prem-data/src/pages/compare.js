import React, { useState } from 'react';
import Taskbar from '../components/taskbar/taskbar';
import ComparePlayerSection from '../components/compare-page/compare-player-section';
import './page-style.css';

function Compare(){

    // const [player1, setPlayer1] = useState();
    // const [player2, setPlayer2] = useState();

    const [chartMode, setChartMode] =  useState([]);

    const getValue = (value) => {
        if(typeof value === 'undefined' || value === null ){
            return 0;
        }
        else{

            return value
        }
    }

    const fetchData = async () => {
        const response = await fetch(`http://localhost:3001/calculate-percentiles`);
        const data = await response.json();

        console.log(data)
    }

    return(
        <div className='compare-page'>
            <Taskbar />
            <div className='compare-details-wrapper'>
                <ComparePlayerSection />
            </div>
            <button onClick={() => {fetchData()}}>Here</button>
        </div>
    )
}

export default Compare;
