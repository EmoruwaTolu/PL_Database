import React, {useState} from 'react';

export default function BasicTabs() {

    const [view, setView] = useState(0);

    function changeView(id){
        setView(id);
    }

    return (
        <div className='pl-season-info'>
            <div className='home-tabs'>
                <button className={view === 0 ? "active-tab" : ""} onClick={() => {changeView(0)}}>Overall</button>
                <button className={view === 1 ? "active-tab" : ""} onClick={() => {changeView(1)}}>Home</button>
                <button className={view === 2 ? "active-tab" : ""} onClick={() => {changeView(2)}}>Away</button>
            </div>
            {view === 0 && (<div>2</div>)}
            {view === 1 && (<div>4</div>)}
            {view === 2 && (<div>8</div>)}
        </div>
    );
}