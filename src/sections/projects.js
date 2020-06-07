import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function ProjectItem({ title, description, url, imgClass }) {
  return (
    <div className="project-item">
      <Link to={url} className={imgClass}>
        <div className="project-item-info">
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
          url={"/skkf"}
          imgClass={"skkf"}
        />
        <ProjectItem
          title={"Helly Hansen"}
          description={"Website - The Farm"}
          url={"/hellyhansen"}
          imgClass={"hellyhansen"}
        />
        <ProjectItem
          title={"Leos Lekland"}
          description={"Website - The Farm"}
          url={"/leos"}
          imgClass={"leos"}
        />
        <ProjectItem
          title={"Battlerite"}
          description={"Game - Stunlock Studios"}
          url={"/battlerite"}
          imgClass={"battlerite"}
        />
        <ProjectItem
          title={"Outvaders Must Die"}
          description={"Game - Nordic Game Jam"}
          url={"/outvadersmustdie"}
          imgClass={"outvaders"}
        />
      </section>
    );
  }
}

export default ProjectsSection;
