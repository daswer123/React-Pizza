import React, { useState } from "react"
import { setCategory } from "../../actions"
import { connect } from "react-redux"

const Categories = ({category,setCategory,pizzas}) => {

     function transformCategory(category){
        let title = "";
        switch (category){
          case 1:
            title = "Мясные"
            break
          case 2:
            title = "Вегетарианская"
            break
          case 3:
              title = "Мясные"
              break
          case 4:
              title = "Вегетарианская"
              break
          default:
              title = "Закрытые"
        }
        return title
    }

    const categoryItems = () => {
      const allCategory = [];
      return pizzas.map(pizza => {

        let className = "";
        if (allCategory.findIndex(elem => elem === pizza.category) > -1){
          return;
        }

        allCategory.push(pizza.category)

        if (category === pizza.category){
          className += "active" 
        }

        return <li 
        key={"category-"+pizza.category}
        onClick={() => setCategory(pizza.category)}
        className={className}>
          {transformCategory(pizza.category)}</li>
      })
    }

    const AllCategories = () => {
      if (category === "all"){
        return <li className="active" onClick={() => setCategory("all")}>Все</li>
      }
        return <li className="" onClick={() => setCategory("all")}>Все</li>
    }

    return (
        <div className="categories">
        <ul>
          {AllCategories()}
          {categoryItems()}
          {/* <li>Мясные</li>
          <li>Вегетарианская</li>
          <li>Гриль</li>
          <li>Острые</li>
          <li>Закрытые</li> */}
        </ul>
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    pizzas : state.pizza,
    category : state.category
  }
}

const mapDispathToState = {
  setCategory,
}

export default connect(mapStateToProps,mapDispathToState)(Categories)