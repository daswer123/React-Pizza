/* eslint-disable default-case */
import produce from "immer";

const initialState = {
    pizza : [],
    order : [],
    category: 1,
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
       }
    })
}

export default reducer