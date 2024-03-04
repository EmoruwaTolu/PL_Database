import React from "react";
import './search-taskbar-style.css';
import { Link } from "react-router-dom";

function Taskbar() {

    return(
        <nav className="taskbar">
            <Link to={`/`} className="logo">Here</Link>
            <ul>
                <li> <Link to={`/compare`}>Compare</Link></li>
                <li> <Link to={`/blog`}>Blog</Link></li>
                <li> <Link to={`/create`}>Create</Link></li>
            </ul>
        </nav>
    )
}

export default Taskbar;