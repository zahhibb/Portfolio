import React from "react";
import ScrollArrow from "../components/scroll-arrow.js";
import "../App.css";

const Leos = () => {
    return (
        <div className="page">
            <div className="page-container">
                <div className="page-banner leos">
                    <ScrollArrow />
                </div>
                <div className="page-content" id="content">
                    <div>
                        <h2>Hello Leos Lekland</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Leos;
