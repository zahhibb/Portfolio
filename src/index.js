import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import "./index.css";

import App from "./App";
import About from "./pages/about";
import Battlerite from "./pages/battlerite";
import Akined from "./pages/akined";
import Eldritch from "./pages/eldritch";
import Pioneer from "./pages/pioneer";
import Battlefield6 from "./pages/battlefield6";
import EldenRing from "./pages/eldenring";
import Credits from "./pages/credits";
// import GameList from "./pages/gamelist";
// import GameDevResources from "./pages/gamedevresources";
import NotFoundPage from "./pages/NotFoundPage";
import { Redirect } from "react-router-dom";

const root = document.getElementById("root");
const routing = (
  <Router>
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/battlerite" component={Battlerite} />
        <Route path="/akined" component={Akined} />
        <Route path="/eldritch" component={Eldritch} />
        <Route path="/pioneer" component={Pioneer} />
        <Route path="/battlefield6" component={Battlefield6} />
        <Route path="/eldenring" component={EldenRing} />
        <Route path="/credits" component={Credits} />
        {/* <Route path="/gamelist" component={GameList} />
        <Route path="/gamedevresources" component={GameDevResources} /> */}
        <Route path="/404" component={NotFoundPage} />
        <Redirect to="/404" />
      </Switch>
    </ThemeProvider>
  </Router>
);

ReactDOM.render(routing, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
