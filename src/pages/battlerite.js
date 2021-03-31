import React, { useEffect } from "react";
import Navigation from "../components/Navigation/navigation";
import ScrollArrow from "../components/ScrollArrow/scroll_arrow.js";
import "../App.css";

const Battlerite = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="page">
            <Navigation />
            <div className="page-container">
                <div className="page-banner battlerite">
                    <ScrollArrow />
                </div>
                <div className="page-content" id="content">
                    <div className="page-intro">
                        <h2><a href="https://arena.battlerite.com/" rel="noopener noreferrer">Battlerite</a> is an action-packed <i>'Team Arena Brawler'</i> focused on competitive PvP combat where you fight side by side with teammates against an opposing team. I began my short but rich journey at <a href="https://www.stunlock.com/" rel="noopener noreferrer">Stunlock Studios</a>, the team behind its success, in january of 2017 as an intern for 6 months and additionally 3 months on a contract during the summer.</h2>

                        <h2>Here I am going to cover my experience working at my first ever game development studio as a Technical Designer on <i>Battlerite</i> and talk about some of the work I did, such as gameplay, character, and level design, as well as a LOT of iteration on prototyping game mode ideas.</h2>
                    </div>
                    <div className="page-main">
                        <p>Hello Battlerite</p>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Battlerite;
