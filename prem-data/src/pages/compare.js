import React, { useState } from 'react';
import Taskbar from '../components/taskbar/taskbar';
import ComparePlayerSection from '../components/compare-page/compare-player-section';
import './page-style.css';

function Compare(){

    return(
        <div className='compare-page'>
            <Taskbar />
            <div className='compare-details-wrapper'>
                <ComparePlayerSection />
            </div>
        </div>
    )
}

export default Compare;
