import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function ProjectItem({ title, url, imgClass }) {
  return (
    <div className="project-item">
      <Link to={url} className={imgClass}>
        {/* <div className="project-item-info">
          <p>{title}</p>
        </div> */}
      </Link>
    </div>
  );
}

class ProjectsSection extends Component {
  render() {
    return (
      <section className="projects">
        <div className="projects-container">
          <h2>Projects</h2>
          <div className="projects-list">
            <div className="projects-websites">
              <h3>Websites</h3>
              <div className="website-list">
                <ProjectItem
                  title={"SKKF"}
                  url={"/skkf"}
                  imgClass={"skkf"}
                />
                <ProjectItem
                  title={"Helly Hansen"}
                  url={"/hellyhansen"}
                  imgClass={"hellyhansen"}
                />
                <ProjectItem
                  title={"Leos Lekland"}
                  url={"/leos"}
                  imgClass={"leos"}
                />
              </div>
            </div>
            <div className="projects-games">
              <h3>Games</h3>
              <div className="games-list">
                <ProjectItem
                  title={"Battlerite"}
                  url={"/battlerite"}
                  imgClass={"battlerite"}
                />
                <ProjectItem
                  title={"Outvaders Must Die"}
                  url={"/outvadersmustdie"}
                  imgClass={"outvaders"}
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
