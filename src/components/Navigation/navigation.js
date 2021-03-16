import React, { useState } from "react";
import { Link } from "react-router-dom";
import Burger from "../Burger/burger";
import MobileNav from "./mobile_navigation";
import { StyledDesktopNav } from '../';

const Navigation = () => {

  // Mobile navigation
  const [open, setOpen] = useState(false);

  return (
    <div className="nav-container">
      <StyledDesktopNav>
        <div className="nav-owner">
          <Link to={"/"}>Joakim Hedman</Link>
        </div>
        <ul>
          <li>
            <a href="/#home">HOME</a>
          </li>
          <li>
            {/* <a href="/#projects">PROJECTS</a> */}
            <Link
              to={{
                pathname: "/",
                hash: "#projects"
              }}
            >PROJECTS</Link>
          </li>
          <li>
            <a href="/#about">ABOUT</a>
          </li>
        </ul>
        <div className="nav-socials">
          <span className="linkedin">
            <a href="https://www.linkedin.com/in/joakim-hedman/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </span>
        </div>
        <Burger open={open} setOpen={setOpen} />
      </StyledDesktopNav>
      <MobileNav open={open} setOpen={setOpen} />
    </div >
  );
}

export default Navigation;
