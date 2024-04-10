import React, { useState, useEffect } from "react";
import "../styles.css"

export default function HomeQuiz(){

    const [posts, setPosts] = useState([]);

    const fetchData = async () => {

        try{
            const response = await fetch(`https://pl-database-1gr2.onrender.com/blog-posts`);
            const data = await response.json();
            setPosts(data);
        }
        catch(error){
            console.error('Error fetching blogs');
        }
        
    }

    useEffect(() => {
        fetchData('');
    }, []);

    console.log(posts[0])

    if(posts.length === 0){
        return <div>Loading data ...</div>
    }

    return (
        <div className="quiz-carousel">
            <div className="quiz-carousel-title">Quiz</div>
            <img src={posts[0].image} alt="news img" className="carousel-image"></img>
            <div className="story-title">Play Connections and test your skills!</div>
            <div className="story-preview">Can you figure out what connects these players?</div>
        </div>
    )
}