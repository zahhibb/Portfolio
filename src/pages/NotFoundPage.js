import React from "react";
import Footer from "../sections/footer";
import { Link } from "react-router-dom";
import "../App.css";

const NotFoundPage = () => {
  return (
    <div className="page NotFoundPage">
      <div className="page-container">
        <h1>404</h1>
        <h2>Page Not Found... <i>sorry mate ;)</i></h2>
        <ul>
          <li>
            <Link to={"/#home"}>Back to Portfolio</Link>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default NotFoundPage;
