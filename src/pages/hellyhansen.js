import React, { useEffect } from "react";
import Navigation from "../components/Navigation/navigation";
import ScrollArrow from "../components/ScrollArrow/scroll_arrow.js";
import "../App.css";

const Hellyhansen = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="page">
            <Navigation />
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
