import React from "react";
import Taskbar from '../components/taskbar';
// import image from '../images/hero2.jpg';
import Hero from '../components/hero';
import { RecommendPlayers } from "../components/recommend-players";

function Home(){
    return(
        <div>
            <div style={{
                //backgroundImage: `url(${image})`, 
            height: "100vh", objectFit: "contain", backgroundRepeat: "no-repeat", 
                        backgroundSize: "cover", backgroundPosition: "center"}}>
            <Taskbar />
            <Hero />
            <RecommendPlayers title={"Trending Players"}/>
            </div>
        </div>
    )
}

export default Home;