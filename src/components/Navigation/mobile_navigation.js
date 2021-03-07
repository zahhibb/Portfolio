import React from "react";
// import "../App.css";

const MobileNavigation = ({ open }) => {
    return (
        <nav className="mobile-navigation">
            <div className="mobile-nav-cover" open={open}>
                <ul>
                    <li>
                        <a href="/#home">HOME</a>
                    </li>
                    <li>
                        <a href="/#projects">PROJECTS</a>
                    </li>
                    <li>
                        <a href="/#about">ABOUT</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default MobileNavigation;
