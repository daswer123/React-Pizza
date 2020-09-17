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
        payload : pizza
    }
}

const setCategory = (category) => {
    return {
        type : "SET_CATEGORY",
        payload : category
    }
}

const chouseFilter = (filterName) => {
    return dispath => {
        switch (filterName){
            case "rate" : 
                dispath(filterByRate())
                break
            case "name" : 
                dispath(filterByName())
                break
            case "price" : 
                dispath(filterByPrice())
                break
            default:
                dispath(filterByRate())
        }
}
}

const filterByRate = () => {
    return {
        type: "FILTER_BY_RATING"
    }
}

const filterByName = () => {
    return {
        type: "FILTER_BY_NAME"
    }
}

const filterByPrice = () => {
    return {
        type: "FILTER_BY_PRICE"
    }
}

export {
    getPizza,
    addPizza,
    setCategory,
    chouseFilter,
    
}