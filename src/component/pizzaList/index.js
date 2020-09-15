import React from "react";

import PizzaItem from "../pizzaItem"

const PizzaList = () => {
    return (
        <>
        <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
                <PizzaItem/>
          </div>
          </>
    )
}

export default PizzaList