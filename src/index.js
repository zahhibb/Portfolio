import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from "react-router-dom";

import './index.css';

import App from './App';

const root = document.getElementById('root');
const routing = (
<Router>
    <Route exact path="/" component={App}></Route>
</Router>
);


ReactDOM.render(routing, root);
