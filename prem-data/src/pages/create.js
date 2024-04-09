import React, { useState } from 'react';
import Taskbar from '../components/taskbar/taskbar';
import { CompareAttrList } from '../components/compare-page/compare-attr-list';
import { checkboxOptions } from '../components/miscellaneous-files/checkboxOptions';
import {Autocomplete} from '@mui/material';
import TextField from '@mui/material/TextField';
import { normalizeNames } from '../components/miscellaneous-files/naming';
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, Legend } from 'recharts';
import './page-style.css';
import '../components/home-layer-1/layer1-style.css';

const cellDummyProps = {
    width: 0,
    height: 0,
    x: 0,
    y: 0,
};

const CustomTooltip = ({ active, payload, label }) => {
    console.log(payload)
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
            {/* <img style={{width: `100px`, height: `100px`}} src={payload[0].payload.playImage}/> */}
            <p className="label">{`Name : ${payload[0].payload.playerName}`}</p>
            <p className="label">{`Season : ${payload[0].payload.season}`}</p>
            <p className="label">{`${payload[0].name} : ${payload[0].payload.stat1}`}</p>
            <p className="label">{`${payload[1].name} : ${payload[0].payload.stat2}`}</p>
        </div>
      );
    }
  
    return null;
};

function dataAdjuster(players1, players2, option1, option2){
    let holder = [];
    for(let i = 0; i < players1.length; i++){
        var playerInfo1 = {playerName: players1[i].name , stat1: players1[i][option1][0], stat2: players1[i][option2][0], season: players1[i].season, playImage: players1[i].image}
        holder.push(playerInfo1)
    }
    for(let i = 0; i < players2.length; i++){
        var playerInfo2 = {playerName: players2[i].name , stat1: players2[i][option1][0], stat2: players2[i][option2][0], season: players2[i].season, playImage: players2[i].image}
        holder.push(playerInfo2)
    }
    console.log(holder)
    return holder
}

function Create(){

    const [option1, setOption1] = useState("");
    const [option2, setOption2] = useState("");
    const [graphInfo, setGraphInfo] = useState([]);

    const fetchData = async (option1, option2) => {

        option1 = normalizeNames[option1]
        option2 = normalizeNames[option2]

        try{
            const response1 = await fetch(`https://pl-database-1gr2.onrender.com/create/${option1}`);
            const response2 = await fetch(`https://pl-database-1gr2.onrender.com/${option2}`);
            const data1 = await response1.json();
            const data2 = await response2.json();
            
            let info = dataAdjuster(data1, data2,  option1, option2)
            setGraphInfo(info)
            //console.log(data2)
        }
        catch(error){
            console.error('Error  fetching players', error);
        }
    }

    const handleClick = (option1, option2) => {
        fetchData(option1, option2);
    }

    return(
        <div className='create-page'>
            <Taskbar />
            <div className='create-body'>
                <div className='set-graph'>
                    <div className='autosuggest-set'>
                        <div className='autosuggest-body'>
                            <div className='autosuggest-label'>X: </div>
                            <Autocomplete
                                disablePortal
                                sx={{width: "80%"}}
                                options={checkboxOptions}
                                limitTags={5}
                                onChange={(event, newChange) => {
                                    setOption1(newChange);
                                }}
                                getOptionLabel={(option) => option}
                                renderInput={(params) => 
                                    <TextField {...params} label="Statistics" 
                                        sx={{backgroundColor: "white", borderRadius:"8px"}}
                                    />}
                            />
                        </div>
                        <div className='autosuggest-body'>
                            <div className='autosuggest-label'>Y: </div>
                            <Autocomplete
                                disablePortal
                                options={checkboxOptions}
                                limitTags={5}
                                onChange={(event, newChange) => {
                                    setOption2(newChange);
                                }}
                                sx={{width: "80%"}}
                                getOptionLabel={(option) => option}
                                renderInput={(params) => 
                                    <TextField {...params} label="Statistics" 
                                        sx={{backgroundColor: "white", borderRadius:"8px"}}
                                    />}
                            />
                        </div>
                    </div>
                    <button onClick={() => {handleClick(option1, option2);}}>Generate</button>
                </div>
                <div className='create-graph'>
                            {option1.length !== 0 && option2 &&
                                <ResponsiveContainer width="99%" height="90%" aspect={2}> 
                                    <ScatterChart>
                                        <CartesianGrid />
                                        <ZAxis type="string" dataKey="clubname" name="club" />
                                        <XAxis type="number" dataKey="stat1" name={option1} />
                                        <YAxis type="number" dataKey="stat2" name={option2} />
                                        <Tooltip cursor={{ strokeDasharray: '3 3' }} content={<CustomTooltip />}/>
                                        <Scatter name="clubname" data={graphInfo} fill="#8884d8" >
                                            {graphInfo.map((entry, index) => (
                                                <Cell key={`cell-${entry}`} fill="#8884d8" {...cellDummyProps}/>
                                            ))}
                                        </Scatter>
                                    </ScatterChart>
                                </ResponsiveContainer>}
                </div>
            </div>
            
        </div>
    )
}

export default Create;