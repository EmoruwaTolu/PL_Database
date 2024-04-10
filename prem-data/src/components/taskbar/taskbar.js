import React from "react";
import './search-taskbar-style.css';
import { Link } from "react-router-dom";

function Taskbar() {

    return(
        <nav className="taskbar">
            <Link to={`/`} className="logo">Home</Link>
            <ul>
                <li> <Link to={`/compare`}>Compare</Link></li>
                <li> <Link to={`/quiz`}>Quiz</Link></li>
                <li> <Link to={`/create`}>Create</Link></li>
            </ul>
        </nav>
    )
}

export default Taskbar;