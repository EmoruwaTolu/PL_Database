import React from "react";
import Taskbar from '../components/taskbar';
// import image from '../images/hero2.jpg';
import Hero from '../components/hero';

function Home(){
    return(
        <div>
            <div style={{
                //backgroundImage: `url(${image})`, 
            height: "100vh", objectFit: "contain", backgroundRepeat: "no-repeat", 
                        backgroundSize: "cover", backgroundPosition: "center"}}>
            <Taskbar />
            <Hero />
            </div>
        </div>
    )
}

export default Home;