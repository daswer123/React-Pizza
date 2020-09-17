/* eslint-disable default-case */
import produce from "immer";

const initialState = {
    pizza : [],
    pizzaForCategory : [],
    order : [],
    category: 1,
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
               console.log(action.payload)
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
       }
    })
}

export default reducer