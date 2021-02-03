import React, { useState } from "react";
import { Link } from "react-router-dom";
import Burger from "../components/burger";
import "../App.css";

const Navigation = () => {

  const [open, setOpen] = useState(false);

  return (
    <nav className="desktop-navigation">
      <div className="nav-owner">
        <Link to={"/"}>Joakim Hedman</Link>
      </div>
      <ul>
        <li>
          <a href="/#home" className="nav-active">HOME</a>
        </li>
        <li>
          <a href="/#projects">PROJECTS</a>
        </li>
        <li>
          <a href="/#cv">CV</a>
        </li>
        <li>
          <a href="/#about">ABOUT</a>
        </li>
        <li>
          <a href="/#contact">CONTACT</a>
        </li>
      </ul>
      <div className="nav-socials">
        <span className="linkedin">
          <a href="https://www.linkedin.com/in/joakim-hedman/" target="_blank" rel="noopener noreferrer"></a>
        </span>
      </div>
      <Burger open={open} setOpen={setOpen} />
    </nav>
  );
}

export default Navigation;
