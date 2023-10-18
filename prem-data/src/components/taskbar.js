import React from "react";
import '../styles.css';
import { Link } from "react-router-dom";

function Taskbar() {

    return(
        <nav className="taskbar">
            <div className="logo">Here</div>
            <ul>
                <li> <Link to={`/compare`}>Compare</Link></li>
                <li> <Link to={`/competitions`}>Competitions</Link></li>
                <li> <Link to={`/blog`}>Blog</Link></li>
            </ul>
        </nav>
    )
}

export default Taskbar;