import React from 'react';
import ReactDOM from 'react-dom';
import App from "./component/app";
import {BrowserRouter as Router} from "react-router-dom"

import "./scss/components/_all.scss"
// import './index.css';

ReactDOM.render(
  <Router>
    <App/>
  </Router>,
  document.getElementById('root')
);

