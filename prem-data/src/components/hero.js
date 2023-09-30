import React, { useState, useEffect } from "react";
import Autocompletion from "./autocomplete";
import image from '../images/hero3.jpg';

function Hero(){

    return(
        <div style={{width: "100vw", height: "60vh", padding: "4em", boxSizing: "border-box"}}>
            <Autocompletion />
        </div>
    )
}

export default Hero;