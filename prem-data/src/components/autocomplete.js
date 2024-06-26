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
            const response = await fetch(`https://pl-database-1gr2.onrender.com/searchSuggest`);
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
        history(`/player/${value.name}`)
    }

    return(
        <Autocomplete
            disablePortal
            loading={isLoading}
            options={options}
            limitTags={5}
            onChange={(event, newChange) => {
                if(location.pathname !== "/compare"){
                    handleClick(newChange);
                }
                else{
                    setPlayer(newChange);
                }
            }}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => 
                <TextField {...params} label="Players" 
                    sx={{backgroundColor: "white", borderRadius:"8px"}}
                />}
        />
    )
}

export default Autocompletion;