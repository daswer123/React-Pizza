import React, { useEffect } from "react";
import PizzaItem from "../pizzaItem"
import {connect} from "react-redux"
import {getPizza} from "../../actions"

const PizzaList = ({pizzas,getPizza,category,loading}) => {

    useEffect(() =>{
        if (pizzas.length === 0){
            console.log("Pizzas loaded")
            getPizza()
        }
    })
    
    if (loading){
        return <h1>Loading</h1>
    }

    const pizzaItems = () => {

        function filterCategory(data){
            if (category === "all"){
                return data
            }
            
            return data.filter(elem => elem.category === category)
        }


        const newPizzaArray = filterCategory(pizzas,category)

        return newPizzaArray.map( (pizza,id) => {
            return (
                <PizzaItem {...pizza} key={id}/>
            )
        })

    }



    return (
        <>
         <h2 className="content__title">Все пиццы</h2>
           <div className="content__items">
           {pizzaItems()}

           </div>
          </>
    )

    
}

const mapStateToProps = (state) =>{
    return {
        pizzas : state.pizza,
        loading : state.loading,
        category : state.category
    }
}

const mapDispathToProps = {
    getPizza,
}

export default connect(mapStateToProps,mapDispathToProps)(PizzaList)