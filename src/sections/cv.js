import React, { Component } from "react";
import "../App.css";

function CVBlock({ header, items }) {
    let listItems;
    if (items) {
        listItems = items.map((item, index) =>
            <p key={index}>{item}</p>
        )
    }
    return (
        <div className="cv-block">
            <h4>{header}</h4>
            {listItems}
        </div>
    );
}

class CV extends Component {
    render() {
        return (
            <section className="cv" id="cv">
                <div className="cv-container">
                    <h2>CV</h2>
                    <div className="cv-columns">
                        <div className="cv-single-column">
                            <h3>Skills</h3>
                            <CVBlock header={"Languages (code)"} items={["C#", "JavaScript", "PHP"]} />
                            <CVBlock header={"Game design"} items={["General game design", "Level design", "Puzzle design", "Encounter design"]} />
                            <CVBlock header={"Research"} items={["QA Testing", "Analysis & documentation"]} />
                            <CVBlock header={"Production"} items={["Scrum development"]} />
                            <CVBlock header={"Languages (spoken)"} items={["Swedish: Native", "English: Fluent"]} />
                        </div>
                        <div className="cv-single-column">
                            <h3>Software & Tools</h3>
                            <CVBlock header={"Engines"} items={["Unity", "Unreal Engine 4"]} />
                            <CVBlock header={"Art & editing"} items={["Photoshop", "InDesign"]} />
                            <CVBlock header={"Platforms"} items={["Wordpress", "Drupal"]} />
                            <CVBlock header={"Version Control"} items={["Git"]} />
                            <CVBlock header={"Management"} items={["Trello", "Asana", "Pivotal Tracker"]} />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default CV;
