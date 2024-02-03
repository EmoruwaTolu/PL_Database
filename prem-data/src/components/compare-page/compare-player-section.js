import React from "react";
import { useState, useEffect } from "react";
import './compare-player-section.css';
import Autocompletion from "../autocomplete";
import { CompareAttrList } from "./compare-attr-list";
import RadarAxisMaker from "./compare-function";

const ComparePlayerSection = ({setPlayer}) => {

    const [player1, setPlayer1] = useState();
    const [player2, setPlayer2] = useState();
    const [selectedItems, setSelectedItems] = useState([]);
    const [isPercentileMode, setIsPercentileMode] = useState(false);
    const [percentileComparer, setPercentileComparer] = useState(0);
    

    const options = ['Expected Goals per 90', 
                        'Non-penalty xG per 90', 
                        'Goals per 90',
                        'Non-penalty Goals per 90',
                        'Goals minus xG',
                        'Goals minus Non-penalty xG',
                        'Non-penalty xG per Shot',
                        'Shots per 90',
                        'Shots on Target per 90',
                        'Avg. Shot Distance from Goal',
                        'Expected Assists per 90',
                        'Assists per 90',
                        'Key Passes per 90',
                        'Goal Creating Actions per 90',
                        'Goal Creating Actions from Live Balls per 90',
                        'Goal Creating Actions from Dead Balls per 90',
                        'Goal Creating Actions from Take-ons per 90',
                        'Shot Creating Actions per 90',
                        'Shot Creating Actions from Live Balls per 90',
                        'Shot Creating Actions from Dead Balls per 90',
                        'Shot Creating Actions from Take-ons per 90',
                        'Progressive Carries per 90',
                        'Carries per 90',
                        'Carries into Final 3rd per 90',
                        'Carries into Penalty Area per 90',
                        'Progressive Carrying Distance per 90',
                        'Progressive Passes per 90',
                        'Through Balls per 90',
                        'Progressive Passes Received per 90',
                        'Passes Received per 90',
                        'Passes into Final 3rd per 90',
                        'Passes into Penalty Area per 90',
                        'Touches per 90',
                        'Touches in Attacking Penalty Area per 90',
                        'Touches in Attacking 3rd per 90',
                        'Touches in Middle 3rd per 90',
                        'Touches in Defensive 3rd per 90',
                        'Ball Recoveries per 90',
                        'Successful Take-ons per 90',
                        'Take-ons Attempted per 90',
                        'Fouls Drawn per 90',
                        'Fouls Committed per 90',
                        'Times dispossessed per 90',
                        'Miscontrols per 90',
                        'Errors per 90',
                        'Passes Attempted per 90',
                        'Passes Completed per 90',
                        'Long Passes Attempted per 90',
                        'Long Passes Completed per 90',
                        'Medium Passes Attempted per 90',
                        'Medium Passes Completed per 90',
                        'Short Passes Attempted per 90',
                        'Short Passes Completed per 90',
                        'Crosses per 90',
                        'Switches per 90',
                        'Passes Offside per 90',
                        'Tackles and Interceptions per 90',
                        'Tackles Attempted per 90',
                        'Tackles Won per 90',
                        'Tackles in Attacking 3rd per 90',
                        'Tackles in Middle 3rd per 90',
                        'Tackles in Defensive 3rd per 90',
                        'Interceptions per 90',
                        'Dribblers Challenged per 90',
                        'Dribblers Tackled per 90',
                        'Challenges Lost per 90',
                        'Aerials Won per 90',
                        'Aerials Lost per 90',
                        'Blocks per 90'
                    ];

    const handleCheckboxChange = (checkedItems) => {
        setSelectedItems(checkedItems);
    };

    const handlePercentileToggle = event => {
        setIsPercentileMode(current => !current);
        setPercentileComparer(0);
    };

    return(
        <div className="compare-body">
            <div className="compare-player-input">
                <div className="compare-attributes">
                    <CompareAttrList options={options} onCheckboxChange={handleCheckboxChange} />
                </div>
            </div>
            <div className="player-display">
                <div className="compare-search-fields">
                    <div className="compare-search-field">
                        {player1 && 
                            <div className="compare-image-percentile">
                                <img src={player1.image}></img>
                                {
                                    isPercentileMode && player1.position.includes(",") && 
                                    <div className="percentile-options">
                                        <input type="radio" id={1} name="drone" value={1}  />
                                        <label for={1}>{player1.position.split(",")[0]}</label>
                                        <input type="radio" id={2} name="drone" value={2}  />
                                        <label for={1}>{player1.position.split(",")[1]}</label>
                                    </div>
                                    
                                }
                            </div>
                        }
                        <Autocompletion setPlayer={setPlayer1}/>
                    </div>
                    <div className="compare-search-field">
                        {player2 && 
                            <div className="compare-image-percentile">
                                <img src={player2.image}></img>
                                {
                                    isPercentileMode && player2.position.includes(",") && 
                                    <div className="percentile-options">
                                        <input type="radio" id={1} name="drone" value={0} onCha />
                                        <label for={1}>{player2.position.split(",")[0]}</label>
                                        <input type="radio" id={2} name="drone" value={2}  />
                                        <label for={1}>{player2.position.split(",")[1]}</label>
                                    </div>
                                }
                            </div>
                        }
                        <Autocompletion setPlayer={setPlayer2}/>
                    </div>
                </div>
                <div className="percentile-toggle">
                    <p>Use percentiles on graph</p>
                    <label class="switch">
                        <input type="checkbox" value={isPercentileMode} onChange={handlePercentileToggle}></input>
                        <span class="slider round"></span>
                    </label>
                </div>
                <RadarAxisMaker player1={player1} player2={player2} attributes={selectedItems} />
            </div>
        </div>
        
    )
}

export default ComparePlayerSection;