import React from "react";
import { Link } from "react-router-dom";
import './search-taskbar-style.css';

function SearchTaskbar() {

    return(
        <nav className="search-taskbar">
            <ul>
                <li> <Link to={`/compare`}>Compare</Link></li>
                <li> <Link to={`/competitions`}>Competitions</Link></li>
                <li> <Link to={`/blog`}>Blog</Link></li>
            </ul>
        </nav>
    )
}

export default SearchTaskbar;