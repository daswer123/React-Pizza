import React from "react";
import { connect } from "react-redux"
import Categories from "../categories/";
import Sort from "../sort"
import PizzaList from "../pizzaList"
import {getPizza} from "../../actions"

import loading from "./loading.svg"
import "./pizza.css"



const pizzaPage = ({pizza,getPizza}) => {

  const contentView = () => {
    if (pizza.length === 0){
      getPizza();
      return  <img src={loading} alt="eat" className="loading"/>
    }
    return (
      <>
      <div className="content__top">
                <Categories/>
                <Sort/>
        </div>
                <PizzaList/>
      </>
    )
  }
    return (
        <>
          <div className="content">
            <div className="container">
              {contentView()}
            </div>
          </div>
        </>
    )
}

const mapStateToProps = (state) =>{
  return {
    pizza : state.pizza
  }
}

const mapDispathToProps = {
  getPizza,
}
export default connect(mapStateToProps,mapDispathToProps)(pizzaPage)