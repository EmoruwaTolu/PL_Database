import React, {useState, useEffect} from 'react';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { teamColours } from '../player-tab';
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

    const fetchData = async () => {

        try{
            const response = await fetch(`http://localhost:3001/seasonInformation`);
            const data = await response.json();
            setData(data);
        }
        catch(error){
            console.error('Error fetching players');
        }
        
    }

    useEffect(() => {
        fetchData('');
    }, []);

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
            selector: row => <p onClick={() => {console.log(row.clubname)}}>{row.clubname}</p>,
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

    console.log(data);
    
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
                            <DataTable 
                                columns={columns} 
                                data={data[0].sort((a, b) => b.points - a.points)} 
                                customStyles={customStyles}
                                highlightOnHover
                                responsive
                            />
                        </div>
                        <div className='graph'>
                            <div className='home-graph-header'>XG/Points Table</div>
                            <ResponsiveContainer width="99%" height="90%" aspect={1.4}> 
                                <ScatterChart>
                                    <CartesianGrid />
                                    <ZAxis type="string" dataKey="clubname" name="club" />
                                    <XAxis type="number" dataKey="points" name="Points" />
                                    <YAxis type="number" dataKey="totalXGD" name="xGD" range={[data[0].sort((a, b) => b.points - a.points)[19], data[0].sort((a, b) => b.points - a.points)[0]]}/>
                                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                                    <Scatter name="clubname" data={data[0].sort((a, b) => b.points - a.points)} fill="#8884d8" >
                                        {data[0].map((entry, index) => (
                                            <Cell key={`cell-${entry}`} fill={teamColours[entry.clubname]} {...cellDummyProps}/>
                                        ))}
                                    </Scatter>
                                </ScatterChart>
                            </ResponsiveContainer>
                            
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
                            <DataTable 
                                columns={columns} 
                                data={data[1].sort((a, b) => b.points - a.points)} 
                                customStyles={customStyles}
                                highlightOnHover
                                responsive
                            />
                        </div>
                        <div className='graph'>
                            <div className='home-graph-header'>XG/Points Table</div>
                            <ResponsiveContainer width="99%" height="90%" aspect={1.4}>
                                <ScatterChart >
                                    <CartesianGrid />
                                    <ZAxis type="string" dataKey="clubname" name="club" />
                                    <XAxis type="number" dataKey="points" name="Points" interval={0} range={[data[1].sort((a, b) => b.points - a.points)[19], data[1].sort((a, b) => b.points - a.points)[0] ]}/>
                                    <YAxis type="number" dataKey="totalXGD" name="xGD" />
                                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                                    <Scatter name="clubname" data={data[1].sort((a, b) => b.points - a.points)} fill="#8884d8" >
                                        {data[1].map((entry, index) => (
                                            <Cell key={`cell-${entry}-Home`} fill={teamColours[entry.clubname]} {...cellDummyProps}/>
                                        ))}
                                    </Scatter>
                                </ScatterChart>
                            </ResponsiveContainer>
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
                            <DataTable 
                                columns={columns} 
                                data={data[2].sort((a, b) => b.points - a.points)} 
                                customStyles={customStyles}
                                highlightOnHover
                                responsive
                            />
                        </div>
                        <div className='graph'>
                            <div className='home-graph-header'>XG/Points Table</div>
                            <ResponsiveContainer width="99%" height="90%" aspect={1.4}>
                                <ScatterChart>
                                    <CartesianGrid />
                                    <ZAxis type="string" dataKey="clubname" name="club" />
                                    <XAxis type="number" dataKey="points" name="Points" interval={0} range={[data[2].sort((a, b) => b.points - a.points)[19], data[2].sort((a, b) => b.points - a.points)[0] ]}/>
                                    <YAxis type="number" dataKey="totalXGD" name="xGD" />
                                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                                    <Scatter name="clubname" data={data[2].sort((a, b) => b.points - a.points)} fill="#8884d8" >
                                        {data[2].map((entry, index) => (
                                            <Cell key={`cell-${index}-Away`} fill={teamColours[entry.clubname]} {...cellDummyProps}/>
                                            
                                        ))}
                                    </Scatter>
                                </ScatterChart>
                            </ResponsiveContainer>
                            
                        </div>
                    </div>
                    )
                }</div>)
            }
        </div>
    );
}