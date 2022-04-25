import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { theme } from './theme';
import "./index.css";

import App from "./App";
import About from "./pages/about";
import Battlerite from "./pages/battlerite";
import Akined from "./pages/akined";
import Pioneer from "./pages/pioneer";
import Battlefield6 from "./pages/battlefield6";
import EldenRing from "./pages/eldenring";
import Credits from "./pages/credits";
import GameDevResources from "./pages/gamedevresources";
import NotFoundPage from "./pages/NotFoundPage";

const root = document.getElementById("root");
const routing = (
  <Router>
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/" component={App}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/battlerite" component={Battlerite}></Route>
        <Route exact path="/akined" component={Akined}></Route>
        <Route exact path="/pioneer" component={Pioneer}></Route>
        <Route exact path="/battlefield6" component={Battlefield6}></Route>
        <Route exact path="/eldenring" component={EldenRing}></Route>
        <Route exact path="/credits" component={Credits}></Route>
        <Route exact path="/gamedevresources" component={GameDevResources}></Route>
        <Route path="*" component={NotFoundPage}></Route>
      </Switch>
    </ThemeProvider>
  </Router>
);

ReactDOM.render(routing, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
