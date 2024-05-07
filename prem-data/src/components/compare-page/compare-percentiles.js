import React from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

function ComparePercentiles({player, setSeasonPlayer1, seasonPlayer1, setPercentileComparer, isPercentileMode}){

    return(
        <div>
            {player && <div className="select-menu">
                <div className="select">
                    <span>Select Season</span>
                    <i className="fas fa-angle-down"></i>
                </div>
                <div className="options-list">
                    {player.listOfSeasons.map((seasons, index) => (
                        <div
                            style={{fontSize: '0.8em'}}
                            className={`season-option ${seasonPlayer1 === index ? 'selected-season' : ''}`}
                            onClick={() => {
                                setSeasonPlayer1(index);
                                if(isPercentileMode){
                                    setPercentileComparer(1)
                                }
                                else{
                                    setPercentileComparer(0)
                                }
                                
                            }}
                        >
                            {seasons.season}
                        </div>
                    ))}
                </div>
                            
                {player.listOfSeasons[seasonPlayer1].position.includes(',') && isPercentileMode && <div className="percentile-options">
                    <div>Position Percentiles</div>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue={0}
                        name="radio-buttons-group"
                        >
                            <div style={{display: 'flex'}}>
                                {player.listOfSeasons[seasonPlayer1].position.split(",").map((position, index) => (
                                    <FormControlLabel value={index} control={<Radio />} label={position} onClick={() => {setPercentileComparer(index+1)}}/>
                                ))}
                            </div>
                    </RadioGroup>
                </div>}
            </div>}
        </div>
    )
}

export default ComparePercentiles;