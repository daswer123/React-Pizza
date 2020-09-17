import React from "react";

import Categories from "../categories/";
import Sort from "../sort"
import PizzaList from "../pizzaList"

import "./pizza.css"



const pizzaPage = () => {
    return (
        <>
          <div className="content">
            <div className="container">
              <div className="content__top">
                <Categories/>
                <Sort/>
              </div>
                <PizzaList/>
            </div>
          </div>
        </>
    )
}

export default pizzaPage