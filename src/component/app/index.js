import React from "react";
import {Route} from "react-router-dom"
import AppHeader from "../appHeader";

import {CartPage,PizzaPage} from "../pages"


const App = () => {
    return (
        <div className="wrapper">
            <AppHeader/>
            <Route path="/" exact component={PizzaPage}/>
            <Route path="/cart" exact component={CartPage}/>
        </div>
    )
}

export default App