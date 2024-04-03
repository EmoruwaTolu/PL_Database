import React, { useState, useEffect } from 'react';
import Taskbar from '../components/taskbar/taskbar';
import './connections.css';

const difficultyColors = {
    "Easy": '#90EE90',
    "Medium": '#FFFDD0',
    "Hard": "#ADD8E6",
    "Very Hard": '#CBC3E3'
}

function Quiz(){

    const [connectionsQuestion, setConnectionsQuestion] = useState();
    const [playerNames, setPlayerNames] = useState([]);
    const [startGame, setStartGame] = useState(false);
    const [selectedButtons, setSelectedButtons] = useState([]);
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const [solvedRows, setSolvedRows] = useState(0);
    const [solvedRowsList, setSolvedRowsList] =  useState([]);
    const [solvedDifficulty, setSolvedDifficulty] =  useState("");
    const [gameComplete, setGameComplete] = useState(false)

    const fetchData = async () => {

        try{
            const response = await fetch(`http://localhost:3001/connections`);
            const data = await response.json();
            setConnectionsQuestion(data[0]);

            let tempArray = []

            for(let i = 0; i < data[0].players.length; i++){
                data[0].players[i].name.forEach((item, index)=>{
                    let playerObject = {name: item, group: data[0].players[i].group, difficulty: data[0].players[i].difficulty}
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

    const handleButtonClick = (player) => {
        setSelectedButtons(prevSelected => {
            if (prevSelected.includes(player.name)) {
                return prevSelected.filter(item => item !== player.name);
            } else {
                return [...prevSelected, player.name];
            }
        });
        setSelectedPlayers(prevSelected => {
            if (prevSelected.includes(player)) {
                return prevSelected.filter(item => item !== player);
            } else {
                return [...prevSelected, player];
            }
        });
    };

    const handleSubmit = () => {
        if(selectedPlayers[0].group === selectedPlayers[1].group && selectedPlayers[0].group === selectedPlayers[2].group && selectedPlayers[0].group === selectedPlayers[3].group){
            console.log(playerNames)
            let index1 = playerNames.indexOf(selectedPlayers[0])
            playerNames.splice(index1, 1)
            let index2 = playerNames.indexOf(selectedPlayers[1])
            playerNames.splice(index2, 1)
            let index3 = playerNames.indexOf(selectedPlayers[2])
            playerNames.splice(index3, 1)
            let index4 = playerNames.indexOf(selectedPlayers[3])
            playerNames.splice(index4, 1)
            let newArray =  playerNames
            let solvedGroup = solvedRowsList
            solvedGroup.push(selectedPlayers)
            console.log(newArray)
            let update = solvedRows
            update++

            setPlayerNames(newArray)
            setSolvedRows(update)
            setSelectedPlayers([])
            setSolvedRowsList(solvedGroup)
            setSolvedDifficulty(selectedPlayers[0].difficulty)
        }

        if(solvedRowsList.length === 4 ){
            setPlayerNames([])
            setSolvedRows(0)
            setSelectedPlayers([])
            setSolvedDifficulty("")
            setGameComplete(true)
        }
    }

    const restartGame = () => {
        setGameComplete(false)
        setSolvedRowsList([])
        setStartGame(false)
    }
    useEffect(() => {
        fetchData('');
    }, [startGame]);

    useEffect(() => {
        
    }, [selectedPlayers, playerNames]);

    return(
        <div className='quiz-page'>
            <Taskbar />
            <div className='quiz-types'>
                <div className='quiz-category'>Connections</div>
            </div>
            <div className='start-quiz'>
                {!gameComplete && (<button onClick={() => {setStartGame(true)}}>Play Game</button>)}
                {gameComplete && (<button onClick={() => restartGame()}>Restart Game</button>)}
            </div>
            {startGame && solvedRows === 0 && (
                <div className='connections-container'>
                    <div className='connections-body'>
                        {
                            playerNames.length !== 0 && (
                                <div className='word-buttons' style={{gridTemplateColumns: `repeat(${4 - solvedRows}, 1fr)`, gridTemplateRows: `repeat(${4 - solvedRows}, 1fr)`}}>
                                    {playerNames.map((player, index) => 
                                        <div 
                                        key={index}
                                        className={`word-button ${selectedButtons.includes(player.name) ? 'selected-player' : ''}`}
                                        onClick={() => handleButtonClick(player)}
                                        >
                                            {player.name}
                                        </div>
                                    )}
                                </div>
                            )
                        }
                        <div className='connections-bottom-bar'>
                            <button disabled={selectedPlayers.length !== 4} onClick={() => handleSubmit()}>Submit</button>
                        </div>
                    </div>
                </div>
            )}
            {startGame && (solvedRows > 0) && playerNames.length !== 0 && (
            <div className='connections-container'>
                {
                   
                        <div className='connections-body'>
                            <div className='completed-rows'>
                                {solvedRowsList.map((groups, index) =>
                                    <div key={index} className='solved-row' style={{backgroundColor: `${difficultyColors[groups[index].difficulty]}`}}>
                                        <div className='solved-title'>{groups[index].group}</div>
                                        <div className='solved-players'>
                                            {groups.map((player, index) =>
                                                <div key={`${index}-group`}>{player.name}</div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className='word-buttons' style={{gridTemplateColumns: `repeat(4, 1fr)`}}>
                                {playerNames.map((player, index) => 
                                    <div 
                                    key={index}
                                    className={`word-button ${selectedButtons.includes(player.name) ? 'selected-player' : ''}`}
                                    onClick={() => handleButtonClick(player)}
                                    >
                                        {player.name}
                                    </div>
                                )}
                            </div>
                        </div>
                    
                }
                <div className='connections-bottom-bar'>
                    <button disabled={selectedPlayers.length !== 4} onClick={() => handleSubmit()}>Submit</button>
                </div>
            </div>)}
            {startGame && solvedRowsList.length === 4 && (
                <div className='connections-container'>
                    <div className='completed-rows'>
                        {solvedRowsList.map((groups, index) =>
                            <div key={index} className='solved-row' style={{backgroundColor: `${difficultyColors[groups[index].difficulty]}`}}>
                                <div className='solved-title'>{groups[index].group}</div>
                                <div className='solved-players'>
                                    {groups.map((player, index) =>
                                        <div>{player.name}</div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            ) 
            }
        </div>
    )
}

export default Quiz;