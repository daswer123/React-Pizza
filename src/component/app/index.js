import React from "react";
import {Route, Switch} from "react-router-dom"
import AppHeader from "../appHeader";

import {CartPage,PizzaPage} from "../pages"


const App = () => {
    return (
        <div className="wrapper">
            <AppHeader/>
            <Switch>
                <Route path="/cart" exact component={CartPage}/>
                <Route component={PizzaPage}/>
            </Switch>
        </div>
    )
}

export default App