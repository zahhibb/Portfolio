import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import "./index.css";

import Home from "./pages/home";
import Navigation from "./sections/navigation";
// import SKKF from "./pages/skkf";
// import HH from "./pages/hellyhansen";
// import Leos from "./pages/leos";
import Battlerite from "./pages/battlerite";
// import Outvaders from "./pages/outvaders";

const root = document.getElementById("root");
const routing = (
  <Router>
    <Navigation></Navigation>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      {/* <Route exact path="/skkf" component={SKKF}></Route> */}
      {/* <Route exact path="/hellyhansen" component={HH}></Route> */}
      {/* <Route exact path="/leos" component={Leos}></Route> */}
      <Route exact path="/battlerite" component={Battlerite}></Route>
      {/* <Route exact path="/outvaders-must-die" component={Outvaders}></Route> */}
    </Switch>
  </Router>
);

ReactDOM.render(routing, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
