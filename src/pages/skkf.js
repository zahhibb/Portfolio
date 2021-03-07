import React from "react";
import ScrollArrow from "../components/scroll-arrow.js";
import "../App.css";

const SKKF = () => {
    return (
        <div className="page">
            <div className="page-container">
                <div className="page-banner skkf">
                    <ScrollArrow />
                </div>
                <div className="page-content" id="content">
                    <div>
                        <h2>Hello SKKF</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SKKF;
