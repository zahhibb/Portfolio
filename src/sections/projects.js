import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

// import skkfImg from "../resources/";
// import hhImg from "../resources/";
// import leosImg from "../resources/";
// import battleriteImg from "../resources/";
// import outvadersImg from "../resources/";

function ProjectItem({ title, description, url, image }) {
  return (
    <div className="project-item">
      <Link to={url}>
        <img src={image}></img>
        <div>
          <p>{title}</p>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

class ProjectsSection extends Component {
  render() {
    return (
      <section className="projects-section">
        <ProjectItem
          title={"SKKF"}
          description={"Website - The Farm"}
          // image={skkfImg}
          url={"/skkf"}
        />
        <ProjectItem
          title={"Helly Hansen"}
          description={"Website - The Farm"}
          // image={hhImg}
          url={"hellyhansen"}
        />
        <ProjectItem
          title={"Leos Lekland"}
          description={"Website - The Farm"}
          // image={leosImg}
          url={"leos"}
        />
        <ProjectItem
          title={"Battlerite"}
          description={"Game - Stunlock Studios"}
          // image={battleriteImg}
          url={"battlerite"}
        />
        <ProjectItem
          title={"Outvaders Must Die"}
          description={"Game - Nordic Game Jam"}
          // image={outvadersImg}
          url={"outvadersmustdie"}
        />
      </section>
    );
  }
}

export default ProjectsSection;
