import React, { Component } from "react";
import "../App.css";
import App from "../App";

class Page404 extends Component {
  render() {
    return (
      <App>
        <div className="page404">
          <div className="page404-container">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>Couldn't find the page you were looking for.</p>
          </div>
        </div>
      </App>
    );
  }
}

export default Page404;
