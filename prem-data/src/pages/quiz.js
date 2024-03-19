import React, { useState, useEffect } from 'react';
import Taskbar from '../components/taskbar/taskbar';
import './connections.css';

function Quiz(){

    const [connectionsQuestion, setConnectionsQuestion] = useState();
    const [playerNames, setPlayerNames] = useState([]);

    const fetchData = async () => {

        try{
            const response = await fetch(`http://localhost:3001/connections`);
            const data = await response.json();
            setConnectionsQuestion(data[0]);

            let tempArray = []

            for(let i = 0; i < data[0].players.length; i++){
                data[0].players[i].name.forEach((item, index)=>{
                    let playerObject = {name: item, group: data[0].players[i].group}
                    tempArray.push(playerObject)
                })
            }

            tempArray = tempArray.sort((a, b) => 0.5 - Math.random());
            setPlayerNames(tempArray)
        }
        catch(error){
            console.error('Error fetching questions');
        }
        
    }

    useEffect(() => {
        fetchData('');
    }, []);

    return(
        <div className='quiz-page'>
            <Taskbar />
            <div className='quiz-types'>
                <div className='quiz-category'>Connections</div>
            </div>
            <div className='connections-body'>
                {
                    playerNames.length !== 0 && (
                        <div className='word-buttons'>
                            {playerNames.map(player => <div className='word-button'>{player.name}</div>)}
                        </div>
                    )
                }
            </div>
            <button onClick={() => {console.log(playerNames)}}>hola</button>
        </div>
    )
}

export default Quiz;