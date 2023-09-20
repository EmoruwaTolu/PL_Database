import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import {Autocomplete} from '@mui/material';
import TextField from '@mui/material/TextField';

const Autocompletion = ({setPlayer}) => {

    const [options, setOptions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const history = useNavigate();
    const location =  useLocation();

    const fetchData = async () => {

        setIsLoading(true);

        try{
            const response = await fetch(`http://localhost:3001/searchSuggest`);
            const data = await response.json();
            setOptions(data)
        }
        catch(error){
            console.error('Error  fetching players', error);
        }
        finally{
            setIsLoading(false);
        }
    }

    useEffect(() => {
        // Fetch initial data when the component mounts
        fetchData('');
    }, []);

    const handleClick = (value) => {
        history(`/player/${value.standard_stats.name}`)
    }

    return(
        <Autocomplete
            disablePortal
            loading={isLoading}
            options={options}
            sx={
                {
                    width: "100%",
                }
            }
            onChange={(event, newChange) => {
                if(location.pathname !== "/compare"){
                    handleClick(newChange);
                }
                else{
                    setPlayer(newChange);
                }
            }}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => <TextField {...params} label="Players" />}
        />
    )
}

export default Autocompletion;