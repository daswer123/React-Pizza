import React from "react";
import PizzaContext from "../PizzaContext"

const withPizzaInfo = () => (Wrapper) =>{
    return (props) => {
       return( <PizzaContext.Consumer>
           {PizzaInfo => {
               return <Wrapper {...props} PizzaInfo={PizzaInfo}/>
           }}
        </PizzaContext.Consumer>
        )
    }
}

export default withPizzaInfo