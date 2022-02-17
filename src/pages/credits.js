import React, { Component } from "react";
import "../App.css";
import Navigation from "../components/Navigation/navigation";

class Credits extends Component {
    render() {
        return (
            <div className="credits-page">
                <Navigation />
                <div className="credits-page-container">
                    <h2><u>Credits</u></h2>
                    <div><strong>Arrow icon</strong> made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                    <div><strong>LinkedIn logo</strong> from <a href="https://brand.linkedin.com/downloads" title="LinkedIn Brand Guidelines">LinkedIn Brand Guidelines</a></div>
                    <div><strong>Twitter logo</strong> from <a href="https://about.twitter.com/en/who-we-are/brand-toolkit" title="Twitter Brand Toolkit">Twitter Brand Toolkit</a></div>
                    <div><strong>Steam logo</strong> from <a href="https://partner.steamgames.com/doc/marketing/branding" title="Steam Branding Guidelines">Steam Branding Guidelines</a></div>
                    <div><strong>ArtStation logo</strong> from <a href="https://www.artstation.com/about/logo" title="ArtStation Brand Resources">ArtStation Brand Resources</a></div>
                    <div><strong>Leos Lekland logo</strong> from <a href="https://www.leoslekland.se/" title="Leos Lekland website">Leoslekland.se</a></div>
                    <div><strong>Helly Hansen logo</strong> from <a href="https://www.hellyhansen.com/" title="Helly Hansen website">Hellyhansen.com</a></div>
                    <div><strong>SKKF logo</strong> from <a href="https://skkf.se/" title="SKKF website">SKKF.se</a></div>
                    <div><strong>Battlerite Trio Wallpaper</strong> from <a href="https://arena.battlerite.com/media" title="Battlerite website">Battlerite Media gallery</a></div>
                </div>
            </div>
        );
    }
}

export default Credits;
