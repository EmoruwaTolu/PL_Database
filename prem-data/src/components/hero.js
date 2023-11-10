import React, { useState, useEffect } from "react";
import Autocompletion from "./autocomplete";

function Hero(){

    return(
        <div style={{width: "100%", height: "60vh", boxSizing: "border-box"}}>
            <Autocompletion />
        </div>
    )
}

export default Hero;