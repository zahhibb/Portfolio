import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import "./index.css";

import Home from "./pages/home";
import Page404 from "./pages/page404";
import About from "./pages/about";
import CV from "./pages/cv";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import SKKF from "./pages/skkf";
import Leos from "./pages/leos";
import HH from "./pages/hellyhansen";
import Battlerite from "./pages/battlerite";
import Outvaders from "./pages/outvaders";

const root = document.getElementById("root");
const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/about" component={About}></Route>
      <Route exact path="/cv" component={CV}></Route>
      <Route exact path="/projects" component={Projects}></Route>
      <Route exact path="/skkf" component={SKKF}></Route>
      <Route exact path="/hellyhansen" component={HH}></Route>
      <Route exact path="/leos" component={Leos}></Route>
      <Route exact path="/battlerite" component={Battlerite}></Route>
      <Route exact path="/outvadersmustdie" component={Outvaders}></Route>
      <Route exact path="/contact" component={Contact}></Route>
      <Route component={Page404} />
    </Switch>
  </Router>
);

ReactDOM.render(routing, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
