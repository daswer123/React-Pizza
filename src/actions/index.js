import axios from "axios"

const getPizza = () => {
    return dispath => {
        dispath(getPizzaRequest());

        axios.get("http://localhost:3001/pizzas")
        .then(result => dispath(getPizzaLoaded(result.data)))
        .catch(err => dispath(getPizzaError(err)))
    }
}

const getPizzaRequest = () => {
    return {
        type : "PIZZA_REQUEST"
    }
}

const getPizzaLoaded = (pizzas) => {
    return {
        type : "PIZZA_LOADED",
        payload : pizzas
    }
}

const getPizzaError = () => {
    return {
        type : "PIZZA_ERROR"
    }
}

const addPizza = (pizza) =>{
    return {
        type : "ADD_PIZZA",
        pizza : pizza
    }
}

export {
    getPizza,
    addPizza
}