import React from "react";
import download from "../images/download.png";
import "../style.css"

function Navbar(){
    return(
        <nav className="nav">
            <img src={download} />
            <h3>ReactFacts</h3>
            <h4>ReactCourse Project-One</h4>
        </nav>
    )
}

export default Navbar