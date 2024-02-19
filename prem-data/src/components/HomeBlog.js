import React, { useState, useEffect } from "react";
import "../styles.css"

export default function HomeBlog(){

    const [posts, setPosts] = useState([]);

    const fetchData = async () => {

        try{
            const response = await fetch(`http://localhost:3001/blog-posts`);
            const data = await response.json();
            setPosts(data);
        }
        catch(error){
            console.error('Error fetching players');
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
        <div className="blog-carousel">
            <div className="blog-carousel-title">Blogs</div>
            <img src={posts[0].image} alt="news img" className="carousel-image"></img>
            <div className="story-title">{posts[0].title}</div>
            <div className="story-preview">{posts[0].preview}</div>
            <div className="carousel-navigator">
                <button className="carousel-locator current-image"></button>
                <button className="carousel-locator"></button>
                <button className="carousel-locator"></button>
                <button className="carousel-locator"></button>
            </div>
        </div>
    )
}