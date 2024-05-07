import React from "react";
import { useState, useEffect } from "react";
import './compare-player-section.css';
import Autocompletion from "../autocomplete";
import { CompareAttrList } from "./compare-attr-list";
import RadarAxisMaker from "./compare-function";
import { checkboxOptions } from "../miscellaneous-files/checkboxOptions";
import ComparePercentiles from "./compare-percentiles";

const ComparePlayerSection = () => {

    const [player1, setPlayer1] = useState();
    const [player2, setPlayer2] = useState();
    const [selectedItems, setSelectedItems] = useState([]);
    const [isPercentileMode, setIsPercentileMode] = useState(false);
    const [percentileComparer1, setPercentileComparer1] = useState(0);
    const [percentileComparer2, setPercentileComparer2] = useState(0);
    const [seasonPlayer1, setSeasonPlayer1] = useState(0);
    const [seasonPlayer2, setSeasonPlayer2] = useState(0);

    const handleCheckboxChange = (checkedItems) => {
        setSelectedItems(checkedItems);
    };

    const handlePercentileToggle = event => {
        setIsPercentileMode(current => !current);
        if(isPercentileMode){
            setPercentileComparer1(0);
            setPercentileComparer2(0);
        }
        else{
            setPercentileComparer1(1);
            setPercentileComparer2(1);
        }
    };
    
    useEffect(() => {
        setSeasonPlayer1(0);
    }, [player1]);

    useEffect(() => {
        setSeasonPlayer2(0);
    }, [player2]);

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
                        {player1 && player1.listOfSeasons[seasonPlayer1] !== undefined && 
                            <ComparePercentiles player={player1} 
                                setSeasonPlayer1={setSeasonPlayer1} seasonPlayer1={seasonPlayer1}
                                setPercentileComparer={setPercentileComparer1} 
                                isPercentileMode={isPercentileMode}
                            />
                        }
                    </div>
                    <div className="compare-search-field">
                        {player2 && 
                            <div className="compare-image-percentile">
                                <img src={player2.listOfSeasons[0].image}></img>
                            </div>
                        }
                        <Autocompletion className="compare-search-bar" setPlayer={setPlayer2}/>
                        {player2 && player2.listOfSeasons[seasonPlayer2] !== undefined && player2 !== null &&
                            <ComparePercentiles player={player2} 
                                setSeasonPlayer1={setSeasonPlayer2} seasonPlayer1={seasonPlayer2}
                                setPercentileComparer={setPercentileComparer2} 
                                isPercentileMode={isPercentileMode}
                            />
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
                {player1 && player2 && 
                    <RadarAxisMaker player1={player1} player2={player2} attributes={selectedItems} 
                    percentile1={percentileComparer1} percentile2={percentileComparer2}
                    season1={seasonPlayer1} season2={seasonPlayer2}
                />
                }
            </div>
        </div>
        
    )
}

export default ComparePlayerSection;