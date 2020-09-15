import React from "react"

import AppHeader from "../appHeader"
import Categories from "../categories/";
import Sort from "../sort"
import PizzaList from "../pizzaList"

import "../../scss/components/_all.scss"

const pizzaPage = () => {
    return (
        <div className="wrapper">
        <AppHeader/>
          <div className="content">
            <div className="container">
              <div className="content__top">
                <Categories/>
                <Sort/>
              </div>
                <PizzaList/>
            </div>
          </div>
        </div> 
    )
}

export default pizzaPage