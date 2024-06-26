import React from "react";
import Taskbar from '../components/taskbar/taskbar';
import Hero from '../components/hero';
import HomeQuiz from "../components/HomeQuiz";
import { RecommendPlayers } from "../components/recommend-players";
import '../styles.css';
import BasicTabs from "../components/home-layer-1/pl-table";

function Home(){
    return(
        <div className="home">
            <Taskbar />
            <div className="home-content">
                <div className="home-layer-1">
                        <BasicTabs />
                </div>
                <div className="home-layer-2">
                    <div className="home-quiz">
                        <HomeQuiz />
                    </div>
                    <div className="home-search-trending">
                        <Hero />
                        <RecommendPlayers title={"Explore Players"}/>
                    </div>
            </div>
            
            </div>
        </div>
    )
}

export default Home;