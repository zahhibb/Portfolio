import React from "react";
import { StyledMobileNav } from '../';

const MobileNavigation = ({ open }) => {
    return (
        <StyledMobileNav open={open}>
            <div className="mobile-nav-cover">
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
        </StyledMobileNav>
    );
}

export default MobileNavigation;
