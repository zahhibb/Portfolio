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
                        <h2><a href="https://arena.battlerite.com/" rel="noopener noreferrer">Battlerite</a> is a action-packed <i>'Team Arena Brawler'</i> focused on competitive PvP combat where you fight side by side with teammates against an opposing team. I began my short but rich journey at <a href="https://www.stunlock.com/" rel="noopener noreferrer">Stunlock Studios</a>, the team behind its success, in January of 2017 and ended in August the same year.</h2>

                        <h2>Here I am going to cover my experience working at my first ever game development studio as a Technical Designer and talk about some of the work I did, such as system, gameplay, character, and level design, as well a LOT of iteration on prototyping game mode ideas.</h2>
                    </div>
                    <div className="page-main">
                        <div className="main-intro">
                            <div>
                                <p>My time at the studio began through an internship at the end of my 2nd year of a game development vocational school, my focus primarily being on programming.</p>
                                <p>Together with 3 others from my school, 2 designers and 1 programmer (including me), were taken in as a sort of think-tank or R&D department to prototype and work out new interesting gameplay modes and functionalities to be included in <i>Battlerite</i>.</p>
                            </div>
                            <div>
                                <p>While at the beginning all of us interns had to spend time to learn the studios own proprietary tools and workflows, but we later got our feet wet with prototyping small basic ideas that further down turned into fully established game modes.</p>
                                <p><b><i>I'm going to be fairly non-technical during this report.</i></b></p>
                            </div>
                        </div>
                        <div className="info">
                            <span>
                                <span className="info-i">i</span><b><i>Game Mode</i></b>
                            </span>
                            <p>A distinct configuration that varies gameplay and affects how other game mechanics behave. A game with several modes will present different settings in each one, changing how a particular element of the game is played.
                            </p>
                        </div>
                        <div className="main-content">
                            <h3>Creating a Game Mode</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Battlerite;
