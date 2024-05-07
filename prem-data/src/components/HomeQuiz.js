import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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

    if(posts.length === 0){
        return <div>Loading data ...</div>
    }

    return (
        <div className="quiz-carousel">
            <div className="quiz-carousel-title">Quiz</div>
            <img src={posts[0].image} alt="news img" className="carousel-image"></img>
            <Link className="story-title" to={`/quiz`}>Play Connections and test your skills!</Link>
            <div className="story-preview">Can you figure out what connects these players?</div>
        </div>
    )
}