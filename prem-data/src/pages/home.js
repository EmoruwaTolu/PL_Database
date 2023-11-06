import React from "react";
import Taskbar from '../components/taskbar';
import Hero from '../components/hero';
import { RecommendPlayers } from "../components/recommend-players";
import '../styles.css';
import BasicTabs from "../components/pl-table";

// function handleChange() = 

function Home(){
    return(
        <div className="home">
            <Taskbar />
            <div className="home-content">
                <div className="home-layer-1">
                        <BasicTabs />
                </div>
                <div className="home-layer-2">
                    <div className="home-blog">

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