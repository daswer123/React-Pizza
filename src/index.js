import React from 'react';
import ReactDOM from 'react-dom';
import App from "./component/app";
import ErrorBoundry from "./component/ErrorBoudry"
import {BrowserRouter as Router} from "react-router-dom"
import {Provider} from "react-redux"
import store from "./store"
import PizzaContext from "./component/PizzaContext"
import PizzaInfo from "./services"

import "./scss/app.scss"


ReactDOM.render(
  <Provider store={store}>
   <Router>
     <ErrorBoundry>
       <PizzaContext.Provider value={PizzaInfo}>
          <App/> 
       </PizzaContext.Provider>
     </ErrorBoundry>
   </Router>
  </Provider>,
  document.getElementById('root')
);

