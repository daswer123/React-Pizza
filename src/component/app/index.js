import React from "react";
import {Route} from "react-router-dom"

import {CartPage,PizzaPage} from "../pages"


const App = () => {
    return (
        <>
            <Route path="/" exact component={PizzaPage}/>
            <Route path="/cart" exact component={CartPage}/>
        </>
    )
}

export default App