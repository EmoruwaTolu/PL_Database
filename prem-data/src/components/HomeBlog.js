import React from "react";
import "../styles.css"

export default function HomeBlog(){

    return (
        <div className="blog-carousel">
            <div src="" alt="news img" className="carousel-image"></div>
            <div class="carousel-navigator">
                <button class="carousel-locator current-image"></button>
                <button class="carousel-locator"></button>
                <button class="carousel-locator"></button>
                <button class="carousel-locator"></button>
            </div>
        </div>
    )
}