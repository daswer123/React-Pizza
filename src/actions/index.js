import axios from "axios"
import Swai from "sweetalert2"

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

const removeOrderItem = (item) =>{
    return {
        type: "REMOVE_ORDER_ITEM",
        payload : item
    }
}

const clearAll = () => {
    return{
        type : "CLEAR_CART"
    }
}

const plusOne = (item) =>{
    return {
        type : "PLUS_ITEM",
        payload : item
    }
}

const minusOne = (item) =>{
    return {
        type : "MINUS_ITEM",
        payload : item
    }
}

const createNewOrder = (order,allPrice) =>{
    return dispath => {
        let newOrder = order.map(elem=>{
            return {
                name :elem.name,
                size : elem.size,
                category : elem.category,
                price : elem.basePrice,
                count : elem.count,
                costs : elem.basePrice * elem.count
            }
        })
        newOrder.push(allPrice)
        axios.post("http://localhost:3001/orders",newOrder)
        .then(result => {
            Swai.fire(
                'Успешно!',
                'Мы успешно получили ваш заказ и уже начали его готовить!',
                'success'
              )
            dispath(clearAll())
        })
        .catch(err => Swai.fire(
            'Ошибка!',
            'К сожалению мы не смогли получить ваш заказ, попробуйте снова!',
            'error'
          ))
    }
    
}

export {
    getPizza,
    addPizza,
    setCategory,
    chouseFilter,
    removeOrderItem,
    clearAll,
    plusOne,
    minusOne,
    createNewOrder
    
}