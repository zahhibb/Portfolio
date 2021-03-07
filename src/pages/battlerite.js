import React from "react";
import ScrollArrow from "../components/scroll-arrow.js";
import "../App.css";

const Battlerite = () => {
    return (
        <div className="page">
            <div className="page-container">
                <div className="page-banner battlerite">
                    <ScrollArrow />
                </div>
                <div className="page-content" id="content">
                    <div>
                        <h2>Hello Battlerite</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Battlerite;
