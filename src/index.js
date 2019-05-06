import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import './index.css';

import Header from './Header';
import App from './App';
import Other from './Other';

const root = document.getElementById('root');
const routing = (
<Router>
    <Route path="/" component={Header}></Route>
    <Route exact path="/" component={App}></Route>
    <Route path="/other" component={Other}></Route>
</Router>
);


ReactDOM.render(routing, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
