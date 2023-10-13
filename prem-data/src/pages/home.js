import React from "react";
import Taskbar from '../components/taskbar';
import Hero from '../components/hero';
import { RecommendPlayers } from "../components/recommend-players";
import '../styles.css';

function Home(){
    return(
        <div className="home">
            <div style={{height: "100vh", boxSizing: "border-box", width: "100%"}}>
            <Taskbar />
            <div className="home-content">
                <div className="home-layer-1">

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
        </div>
    )
}

export default Home;