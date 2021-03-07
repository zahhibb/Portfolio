import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

import { projectRef } from "../components/Navigation/navigation.js";

function ProjectItem({ title, description, url, imgClass }) {
  return (
    <div className="project-item-container">
      <div className={"project-item " + imgClass}>
        <Link to={url}></Link>
        <p className="item-title">{title}</p>
        <span className="item-desc">{description}</span>
      </div>
    </div>
  );
}

class ProjectsSection extends Component {
  render() {
    return (
      // <section className="projects" id="projects" ref={projectRef}>
      <section className="projects" id="projects">
        <div className="projects-container">
          <h2>Projects</h2>
          <div className="projects-list">

            <div className="projects-websites">
              <h3>Websites</h3>
              <div className="websites-list">
                <ProjectItem
                  title={"SKKF"}
                  description={"Re-development of site"}
                  url={"/skkf"}
                  imgClass={"skkf"}
                />
                <ProjectItem
                  title={"Helly Hansen"}
                  description={"Product pages"}
                  url={"/hellyhansen"}
                  imgClass={"hellyhansen"}
                />
                <ProjectItem
                  title={"Leo's Lekland"}
                  description={"Modules & Support"}
                  url={"/leoslekland"}
                  imgClass={"leos"}
                />
              </div>
            </div>
            <hr />
            <div className="projects-games">
              <h3>Games</h3>
              <div className="games-list">
                <ProjectItem
                  title={"Battlerite"}
                  description={"Internship & Game modes"}
                  url={"/battlerite"}
                  imgClass={"battlerite"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ProjectsSection;
