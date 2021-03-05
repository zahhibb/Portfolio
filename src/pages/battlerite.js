import React, { Component } from "react";
import "../App.css";
import ScrollArrow from "../components/scroll-arrow.js";

class Battlerite extends Component {
    render() {
        return (
            <div className="page">
                <div className="page-container">
                    <div className="page-banner battlerite">
                        <ScrollArrow link={"#battlerite"} />
                    </div>
                    <div className="page-content">
                        <div>
                            <h2>Hello Battlerite</h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Battlerite;
