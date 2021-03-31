import React from 'react';
import Navigation from "../components/Navigation/navigation";

function Project({ title, activity, imgClass }) {
    return (
        <div className="other-project-item-container">
            <div className={"other-project-item " + imgClass}>
                <p className="item-title">{title}</p>
                <span className="item-activity">{activity}</span>
            </div>
        </div>
    );
}

const OtherProjects = () => {
    return (
        <div className="page">
            <Navigation />
            <div className="page-container other">
                <h2>Personal projects</h2>
                <h4>Here you'll find projects I have made personally, at school, and during <a href="https://en.wikipedia.org/wiki/Game_jam" target="_blank" rel="noopener noreferrer">Game Jams</a>.</h4>
                <Project title={"Outvaders Must Die"} activity={"Nordic Game Jam 2016"} imgClass={"outvaders"} />
                <Project title={"Canvas Climber"} activity={"School"} imgClass={"canvas"} />
                <Project title={"Höfding"} activity={"School"} imgClass={"hofding"} />
                <Project title={"Sentimental Thief"} activity={"Global Game Jam 2019"} imgClass={"thief"} />
                <Project title={"Lost in Transmission"} activity={"Global Game Jam 2018"} imgClass={"transmission"} />
                <Project title={"Mortal Konga"} activity={"Ludum Dare 34"} imgClass={"konga"} />
            </div>
        </div>
    )
}

export default OtherProjects;