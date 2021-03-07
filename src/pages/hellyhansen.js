import React from "react";
import ScrollArrow from "../components/scroll-arrow.js";
import "../App.css";

const Hellyhansen = () => {
    return (
        <div className="page">
            <div className="page-container">
                <div className="page-banner hellyhansen">
                    <ScrollArrow />
                </div>
                <div className="page-content" id="content">
                    <div>
                        <h2>Hello Helly Hansen</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Hellyhansen;
