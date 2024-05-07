import React, {useState, useEffect} from 'react';
import DataTable from 'react-data-table-component';
import ScatterGraph from '../scatter-chart/scatter-chart';
import './layer1-style.css';

const cellDummyProps = {
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  };

export default function BasicTabs() {

    const [data, setData] = useState([]);
    const [view, setView] = useState(0);
    const [season, setSeason] = useState("2022-23")

    const fetchData = async () => {

        try{
            const response = await fetch(`https://pl-database-1gr2.onrender.com/seasonInformation/${season}`);
            const data = await response.json();
            setData(data);
        }
        catch(error){
            console.error('Error fetching players');
        }
        
    }

    useEffect(() => {
        fetchData('');
    }, [season]);

    const customStyles = {
        rows: {
            style: {
                fontSize: "0.7em",
                backgroundColor: "#696969",
                color: "#F8F8F8"
            },
        },
        headCells: {
            style: {
                fontSize: "1em",
                backgroundColor: "#505050",
                color: "#F8F8F8"
            },
        },
        cells: {
            style: {
                
            },
        },
    };

    const columns = [
        {
            name: 'Club',
            selector: row => <p>{row.clubname}</p>,
            width: "15%",
        },
        {
            name: 'MP',
            selector: row => parseInt(row.matchesPlayed),
            width: "8%",
        },
        {
            name: 'W',
            selector: row => parseInt(row.wins),
            sortable: true,
            width:"8%"
        },
        {
            name: 'D',
            selector: row => parseInt(row.draws),
            sortable: true,
            width:"8%"
        },
        {
            name: 'L',
            selector: row => parseInt(row.losses),
            sortable: true,
            width:"8%"
        },
        {
            name: 'GF',
            selector: row => parseInt(row.goalsScored),
            sortable: true,
            width:"8%"
        },
        {
            name: 'GA',
            selector: row => parseInt(row.goalsConceded),
            sortable: true,
            width:"8%"
        },
        {
            name: 'GD',
            selector: row => parseInt(row.goalDifference),
            sortable: true,
            width:"8%"
        },
        {
            name: 'xG',
            selector: row => parseFloat(row.totalXG),
            sortable: true,
            width:"8%"
        },
        {
            name: 'xGA',
            selector: row => parseFloat(row.totalXGA),
            sortable: true,
            width:"8.5%"
        },
        {
            name: 'Points',
            selector: row => parseInt(row.points),
            sortable: true,
            width:"12.5%"
        }
        
    ];

    function changeView(id){
        setView(id);
    }
    
    //Aspect ratio is used on the Responsive container to prevent it from stretching to an awkward degree on different screens

    return (
        <div className='pl-season-info'>
            <div className='home-tabs'>
                <button className={view === 0 ? "active-tab" : ""} onClick={() => {changeView(0)}}>Overall</button>
                <button className={view === 1 ? "active-tab" : ""} onClick={() => {changeView(1)}}>Home</button>
                <button className={view === 2 ? "active-tab" : ""} onClick={() => {changeView(2)}}>Away</button>
            </div>
            {view === 0 && data!== undefined && (
                <div className="pl-data">{
                    data.length === 3 && (
                    <div className='pl-home-container'>
                        <div className="table">
                            <div className='season-container'>
                                <button onClick={() => {setSeason("2021-22")}}>Previous</button>
                                {season}
                                <button>Next</button>
                            </div>
                            <DataTable 
                                columns={columns} 
                                data={data[0].sort((a, b) => b.points - a.points)} 
                                customStyles={customStyles}
                                highlightOnHover
                                responsive
                            />
                        </div>
                        <div className='graph'>
                            <div className='home-graph-header'>xGD/Points Table</div>
                            <ScatterGraph data={data[0]}/>
                        </div>
                    </div>
                    )
                }</div>)
            }
            {view === 1 && data!== undefined && (
                <div className="pl-data">{
                    data.length === 3 && (
                    <div className='pl-home-container'>
                        <div className="table">
                            <div className='season-container'>
                                <button onClick={() => {setSeason("2021-22")}}>Previous</button>
                                {season}
                                <button>Next</button>
                            </div>
                            <DataTable 
                                columns={columns} 
                                data={data[1].sort((a, b) => b.points - a.points)} 
                                customStyles={customStyles}
                                highlightOnHover
                                responsive
                            />
                        </div>
                        <div className='graph'>
                            <div className='home-graph-header'>xGD/Points Table</div>
                            <ScatterGraph data={data[1]}/>
                        </div>
                    </div>
                    )
                }</div>)
            }
            {view === 2 && data!== undefined && (
                <div className="pl-data">{
                    data.length === 3 && (
                    <div className='pl-home-container'>
                        <div className="table">
                            <div className='season-container'>
                                <button onClick={() => {setSeason("2021-22")}}>Previous</button>
                                    {season}
                                <button>Next</button>
                            </div>
                            <DataTable 
                                columns={columns} 
                                data={data[2].sort((a, b) => b.points - a.points)} 
                                customStyles={customStyles}
                                highlightOnHover
                                responsive
                            />
                        </div>
                        <div className='graph'>
                            <div className='home-graph-header'>xGD/Points Table</div>
                            <ScatterGraph data={data[2]}/>
                        </div>
                    </div>
                    )
                }</div>)
            }
        </div>
    );
}