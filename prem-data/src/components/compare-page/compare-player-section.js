import React from "react";
import { useState, useEffect } from "react";
import './compare-player-section.css';
import Autocompletion from "../autocomplete";
import { CompareAttrList } from "./compare-attr-list";
import RadarAxisMaker from "./compare-function";
import { checkboxOptions } from "../miscellaneous-files/checkboxOptions";

const ComparePlayerSection = () => {

    const [player1, setPlayer1] = useState();
    const [player2, setPlayer2] = useState();
    const [selectedItems, setSelectedItems] = useState([]);
    const [isPercentileMode, setIsPercentileMode] = useState(false);
    const [percentileComparer1, setPercentileComparer1] = useState(0);
    const [percentileComparer2, setPercentileComparer2] = useState(0);
    const [seasonPlayer1, setSeasonPlayer1] = useState(0);
    const [seasonPlayer2, setSeasonPlayer2] = useState(0);
    const [seasonSwitched, setSeasonSwitched] = useState(false);

    const handleCheckboxChange = (checkedItems) => {
        setSelectedItems(checkedItems);
    };

    const handlePercentileToggle = event => {
        setIsPercentileMode(current => !current);
        if(isPercentileMode){
            console.log(player1)
            console.log(player2)
            setPercentileComparer1(0);
            setPercentileComparer2(0);
        }
        else{
            setPercentileComparer1(1);
            setPercentileComparer2(1);
        }
    };

    return(
        <div className="compare-body">
            <div className="compare-player-input">
                <div className="compare-attributes">
                    <CompareAttrList options={checkboxOptions} onCheckboxChange={handleCheckboxChange} />
                </div>
            </div>
            <div className="player-display">
                <div className="compare-search-fields">
                    <div className="compare-search-field">
                        {player1 && 
                            <div className="compare-image-percentile">
                                <img src={player1.listOfSeasons[0].image}></img>
                            </div>
                        }
                        <Autocompletion className="compare-search-bar" setPlayer={setPlayer1}/>
                        {player1 && 
                            <div className="select-menu">
                                <div className="select">
                                    <span>Select Season</span>
                                    <i className="fas fa-angle-down"></i>
                                </div>
                                <div className="options-list">
                                    {player1.listOfSeasons.map((player, index) => (
                                        <div 
                                            className={`season-option ${seasonPlayer1 === index ? 'selected-season' : ''}`}
                                            key={index} onClick={() => {
                                                setSeasonPlayer1(index); 
                                                if(isPercentileMode && seasonPlayer1 !== index){
                                                    setPercentileComparer1(1)
                                                    setPercentileComparer2(1)
                                                }
                                            }}>
                                                {player1.listOfSeasons[index].season}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        }
                        {
                            player1 && (
                                isPercentileMode && player1.listOfSeasons[seasonPlayer1].position.includes(",") && 
                                <div className="percentile-options">
                                    <input type="radio" id={1} name="player1" value={0} onChange={() => {setPercentileComparer1(1)}} />
                                    <label >{player1.listOfSeasons[seasonPlayer1].position.split(",")[0]}</label>
                                    <input type="radio" id={1} name="player1" value={1} onChange={() => {setPercentileComparer1(2)}} />
                                    <label >{player1.listOfSeasons[seasonPlayer1].position.split(",")[1]}</label>
                                </div>
                                
                            )
                        }
                    </div>
                    <div className="compare-search-field">
                        {player2 && 
                            <div className="compare-image-percentile">
                                <img src={player2.listOfSeasons[0].image}></img>
                            </div>
                        }
                        <Autocompletion className="compare-search-bar" setPlayer={setPlayer2}/>
                        {player2 && 
                            <div className="select-menu">
                                <div className="select">
                                    <span>Select Season</span>
                                </div>
                                <div className="options-list">
                                    {player2.listOfSeasons.map((player, index) => (
                                        <div 
                                            className={`season-option ${seasonPlayer2 === index ? 'selected-season' : ''}`}
                                            key={index} onClick={() => {setSeasonPlayer2(index) ;
                                                if(isPercentileMode && seasonPlayer2 !== index){
                                                    setPercentileComparer1(1)
                                                    setPercentileComparer2(1)
                                                }
                                            }}>
                                                {player2.listOfSeasons[index].season}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        }
                        {
                            player2 && (
                                isPercentileMode && player2.listOfSeasons[seasonPlayer2].position.includes(",") && 
                                <div className="percentile-options">
                                    <label >{player2.listOfSeasons[seasonPlayer2].position.split(",")[0]}</label>
                                    <input type="radio" id={2} name="player2" value={0} onChange={() => {setPercentileComparer2(1)}} />
                                    <label >{player2.listOfSeasons[seasonPlayer2].position.split(",")[1]}</label>
                                    <input type="radio" id={2} name="player2" value={1} onChange={() => {setPercentileComparer2(2)}} />
                                </div>
                                
                            )
                        }
                    </div>
                </div>
                <div className="percentile-toggle">
                    <p>Use percentiles on graph</p>
                    <label className="switch">
                        <input type="checkbox" name="" value={isPercentileMode} onClick={() => {handlePercentileToggle()}}></input>
                        <span className="slider round"></span>
                    </label>
                </div>
                <RadarAxisMaker player1={player1} player2={player2} attributes={selectedItems} 
                percentile1={percentileComparer1} percentile2={percentileComparer2}
                season1={seasonPlayer1} season2={seasonPlayer2}
                />
            </div>
        </div>
        
    )
}

export default ComparePlayerSection;