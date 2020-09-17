/* eslint-disable default-case */
import produce from "immer";

const initialState = {
    pizza : [],
    pizzaForCategory : [],
    order : [],
    totalPrice : 0,
    category: "all",
    sortedBy : "rate",
    loading : true,
}
const reducer = (state = initialState,action) => {
    return produce(state,draft => {

       switch (action.type){
           case "PIZZA_REQUEST":
               draft.loading = true
               break

           case "PIZZA_LOADED":
               draft.loading = false
               draft.pizza = action.payload
               draft.pizzaForCategory = action.payload
               break

           case "PIZZA_ERROR":
               draft.loading = false
               draft.error = true
               break

           case "ADD_PIZZA":
               draft.totalPrice += action.payload.basePrice
               const {name,type,size} = action.payload
               let index = state.order.findIndex(pizza => 
                {return ( (pizza.name === name) && (pizza.type === type) && (pizza.size === size) )})
               
                if (index !== -1){
                    draft.order[index].count += 1
                    break
                }

               draft.order.push(action.payload)
               break

            case "SET_CATEGORY":
                draft.category = action.payload
                break

            case "FILTER_BY_RATING":
                draft.sortedBy = "rate"
                draft.pizza = draft.pizza.sort((a,b) =>{
                   return a.rating - b.rating
                })
                break
            case "FILTER_BY_NAME":
                draft.sortedBy = "name"
                draft.pizza = draft.pizza.sort((a,b) =>{
                    return a.name > b.name ? 1 : -1
                })
                break
                
            case "FILTER_BY_PRICE":
                draft.sortedBy = "price"
                draft.pizza = draft.pizza.sort((a,b) =>{
                    return a.price - b.price
                })
                break

            case "REMOVE_ORDER_ITEM":
                const delItem = action.payload;
                let itemIndex = state.order.findIndex(pizza => 
                    {return ( (pizza.name === delItem.name) && (pizza.type === delItem.type) && (pizza.size === delItem.size) )})
                
                draft.totalPrice -= delItem.basePrice * delItem.count
                draft.order = [
                    ...state.order.slice(0,itemIndex),
                    ...state.order.slice(itemIndex+1)
                ]

                break

            case "CLEAR_CART":
                draft.totalPrice = 0
                draft.order = []

                break

            case "PLUS_ITEM":
                const plusItem = action.payload
                const plusItemIndex = state.order.findIndex(pizza => 
                    {return ( (pizza.name === plusItem.name) && (pizza.type === plusItem.type) && (pizza.size === plusItem.size) )})
                
                draft.order[plusItemIndex].count += 1
                draft.totalPrice += plusItem.basePrice
                break
            
            case "MINUS_ITEM":
                const minusItem = action.payload
                const minusItemIndex = state.order.findIndex(pizza => 
                    {return ( (pizza.name === minusItem.name) && (pizza.type === minusItem.type) && (pizza.size === minusItem.size) )})
                
                draft.order[minusItemIndex].count -= 1
                draft.totalPrice -= minusItem.basePrice
                break
       }
    })
}

export default reducer