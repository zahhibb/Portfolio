import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { StyledMobileNav } from '../';

const MobileNavigation = ({ open }) => {
    return (
        <StyledMobileNav open={open}>
            <div className="mobile-nav-cover">
                <ul>
                    <li>
                        <Link to={"/#home"}>HOME</Link>
                    </li>
                    <li>
                        <Link to={"/#projects"}>PROJECTS</Link>
                    </li>
                    <li>
                        <Link to={"/#about"}>ABOUT</Link>
                    </li>
                </ul>
            </div>
        </StyledMobileNav>
    );
}

export default MobileNavigation;