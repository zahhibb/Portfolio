import React, { Component } from "react";
import "./App.css";
import posed from "react-pose";

// const LinkedinStealthText = posed.span({
//   hidden: { opacity: 0, y: 0, x: 0 },
//   visible: { opacity: 1, y: 10, x: -10 },
// });

// const TwitterStealthText = posed.span({
//   hidden: { opacity: 0, y: 0, x: 0 },
//   visible: { opacity: 1, y: 10, x: 10 },
// });

class Header extends Component {
  //   state = {
  //     linkedinIsVisible: false,
  //     twitterIsVisible: false,
  //     linkedin: false,
  //     twitter: false,
  //   };

  //   linkedinMouseOverHandler() {
  //     this.setState({ linkedinIsVisible: true });
  //   }

  //   linkedinMouseOutHandler() {
  //     this.setState({ linkedinIsVisible: false });
  //   }

  //   twitterMouseOverHandler() {
  //     this.setState({ twitterIsVisible: true });
  //   }

  //   twitterMouseOutHandler() {
  //     this.setState({ twitterIsVisible: false });
  //   }

  render() {
    return (
      <header>
        <div>
        </div>
      </header>

      //   <header>
      //     <h1>Joakim Hedman</h1>
      //     <div className="job-title">
      //       <h3>
      //         Web Developer @{" "}
      //         <a
      //           href="https://thefarm.se/en/"
      //           target="_blank"
      //           rel="noopener noreferrer"
      //         >
      //           The Farm
      //         </a>
      //       </h3>
      //     </div>
      //     <div className="social-links">
      //       <a
      //         className="linkedin"
      //         href="https://www.linkedin.com/in/joakim-hedman/"
      //         target="_blank"
      //         rel="noopener noreferrer"
      //         onMouseOver={() => {
      //           this.linkedinMouseOverHandler();
      //         }}
      //         onMouseOut={() => {
      //           this.linkedinMouseOutHandler();
      //         }}
      //       >
      //         <span>LinkedIn</span>
      //       </a>
      //       <LinkedinStealthText
      //         className="stealth-text linkedin-text"
      //         pose={this.state.linkedinIsVisible ? "visible" : "hidden"}
      //       >
      //         /in/joakim-hedman
      //       </LinkedinStealthText>
      //       <a
      //         className="twitter"
      //         href="https://twitter.com/zahhibb"
      //         target="_blank"
      //         rel="noopener noreferrer"
      //         onMouseOver={() => {
      //           this.twitterMouseOverHandler();
      //         }}
      //         onMouseOut={() => {
      //           this.twitterMouseOutHandler();
      //         }}
      //       >
      //         <span>Twitter</span>
      //       </a>
      //       <TwitterStealthText
      //         className="stealth-text twitter-text"
      //         pose={this.state.twitterIsVisible ? "visible" : "hidden"}
      //       >
      //         @zahhibb
      //       </TwitterStealthText>
      //     </div>
      //   </header>
    );
  }
}

export default Header;
