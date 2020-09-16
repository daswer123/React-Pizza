import React, { useEffect } from "react";
import PizzaItem from "../pizzaItem"
import {connect} from "react-redux"
import {getPizza} from "../../actions"

const PizzaList = ({pizzas,getPizza,loading}) => {

    useEffect(() =>{
        if (pizzas.length === 0){
            console.log("Pizzas loaded")
            getPizza()
        }
    })
    
    if (loading){
        return <h1>Loading</h1>
    }

    return (
        <>
         <h2 className="content__title">Все пиццы</h2>
           <div className="content__items">
                 {pizzas.map( (pizza,id) => {
                     return (
                         <PizzaItem {...pizza} key={id}/>
                     )
                 })}
           </div>
          </>
    )

    
}

const mapStateToProps = (state) =>{
    return {
        pizzas : state.pizza,
        loading : state.loading
    }
}

const mapDispathToProps = {
    getPizza,
}

export default connect(mapStateToProps,mapDispathToProps)(PizzaList)