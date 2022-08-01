import React from "react";
import "../style.css"

function Main(){
    return(
        <main className="main-body">
            <h5 className="headfacts">Fun facts about React</h5>
            <ul className="facts">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walker</li>
                <li>Has over 100k stars in github</li>
                <li>Is maintained by facebook</li>
                <li>Powers thousands of enterprise Apps Including mobile Apps</li>
            </ul>
        </main>
    )
}

export default Main