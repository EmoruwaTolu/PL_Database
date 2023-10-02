import React from "react";
import Taskbar from '../components/taskbar';
// import image from '../images/hero2.jpg';
import Hero from '../components/hero';
import { RecommendPlayers } from "../components/recommend-players";

function Home(){
    return(
        <div className="home">
            <div style={{height: "100vh", boxSizing: "border-box", width: "100%"}}>
            <Taskbar />
            <div className="home-content">
                <Hero />
                <RecommendPlayers title={"Trending Players"}/>
            </div>
            </div>
        </div>
    )
}

export default Home;