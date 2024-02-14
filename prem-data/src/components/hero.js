import React, { useState, useEffect } from "react";
import Autocompletion from "./autocomplete";

function Hero(){

    return(
        <div style={{width: "100%", height: "fit-content", boxSizing: "border-box", marginBottom: "5em"}}>
            <Autocompletion />
        </div>
    )
}

export default Hero;